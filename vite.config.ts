import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

const SITE_URL = "https://buzzconnect.lk";

interface RouteSeoEntry {
  route: string;
  title: string;
  description: string;
  canonical: string;
  h1: string;
  subtitle?: string;
  faqs?: { q: string; a: string }[];
  paragraphs?: string[];
}


const extractProp = (block: string, prop: string) => {
  const match = block.match(new RegExp(`${prop}="([^"]+)"`));
  return match?.[1]?.trim() ?? "";
};

const stripHtml = (value: string) => value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const toAbsoluteCanonical = (canonical: string, route: string) => {
  if (canonical.startsWith("http")) return canonical;
  const basePath = canonical || route || "/";
  return `${SITE_URL}${basePath}`;
};

const parseGraphicDesignSeo = (projectRoot: string): Map<string, { title: string; description: string; h1: string }> => {
  const dataFile = path.join(projectRoot, "src", "data", "graphicDesignServices.ts");
  if (!fs.existsSync(dataFile)) return new Map();
  const content = fs.readFileSync(dataFile, "utf8");
  const map = new Map<string, { title: string; description: string; h1: string }>();
  
  // Extract each service object's slug, metaTitle, metaDescription, h1
  const slugRegex = /slug:\s*"([^"]+)"/g;
  const allSlugs: string[] = [];
  for (const m of content.matchAll(slugRegex)) allSlugs.push(m[1]);
  
  for (const slug of allSlugs) {
    // Find the block for this slug
    const blockStart = content.indexOf(`slug: "${slug}"`);
    if (blockStart === -1) continue;
    const blockEnd = content.indexOf(`slug: "`, blockStart + 10);
    const block = content.substring(blockStart, blockEnd === -1 ? content.length : blockEnd);
    
    const metaTitle = block.match(/metaTitle:\s*"([^"]+)"/)?.[1] ?? "";
    const metaDescription = block.match(/metaDescription:\s*"([^"]+)"/)?.[1] ?? "";
    const h1 = block.match(/h1:\s*"([^"]+)"/)?.[1] ?? "";
    
    if (metaTitle) {
      map.set(slug, { title: metaTitle, description: metaDescription, h1 });
    }
  }
  return map;
};

const collectRouteSeo = (projectRoot: string): RouteSeoEntry[] => {
  const appFile = path.join(projectRoot, "src", "App.tsx");
  const appContent = fs.readFileSync(appFile, "utf8");

  const importMap = new Map<string, string>();
  const importRegex = /import\s+(\w+)\s+from\s+"(\.\/pages\/[^"]+)";/g;

  for (const match of appContent.matchAll(importRegex)) {
    const component = match[1];
    const relativeImport = match[2];
    const resolvedPath = path.join(projectRoot, "src", relativeImport.replace("./", ""));
    importMap.set(component, resolvedPath.endsWith(".tsx") ? resolvedPath : `${resolvedPath}.tsx`);
  }

  const graphicDesignSeo = parseGraphicDesignSeo(projectRoot);
  const entries: RouteSeoEntry[] = [];
  const routeRegex = /<Route\s+path="([^"]+)"\s+element={<(\w+)\s*\/>}\s*\/>/g;

  for (const match of appContent.matchAll(routeRegex)) {
    const route = match[1];
    const component = match[2];

    if (route === "*") continue;

    // Check if this is a graphic design service route with dynamic SEO
    const slug = route.replace(/^\//, "");
    const gdSeo = graphicDesignSeo.get(slug);
    if (gdSeo) {
      entries.push({
        route,
        title: gdSeo.title,
        description: gdSeo.description,
        canonical: `${SITE_URL}${route}`,
        h1: gdSeo.h1,
      });
      continue;
    }

    const componentPath = importMap.get(component);
    if (!componentPath || !fs.existsSync(componentPath)) continue;

    const pageContent = fs.readFileSync(componentPath, "utf8");
    const seoHeadBlock = pageContent.match(/<SEOHead[\s\S]*?\/>/)?.[0] ?? "";

    const title = extractProp(seoHeadBlock, "title") || "Buzz Connect | Digital Marketing Sri Lanka";
    const description =
      extractProp(seoHeadBlock, "description") ||
      "No.1 Email Marketing, SMS Marketing, WhatsApp Marketing & Digital Advertising Company in Sri Lanka.";
    const canonical = toAbsoluteCanonical(extractProp(seoHeadBlock, "canonical"), route);

    const serviceLayoutTitle = pageContent.match(/<ServicePageLayout[\s\S]*?title="([^"]+)"/)?.[1] ?? "";
    const inlineH1 = stripHtml(pageContent.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? "");
    const h1 = serviceLayoutTitle || inlineH1 || title;

    const subtitle = pageContent.match(/<ServicePageLayout[\s\S]*?subtitle="([^"]+)"/)?.[1] ?? "";

    // Extract FAQs: pattern { q: "...", a: "..." }
    const faqs: { q: string; a: string }[] = [];
    const faqRegex = /\{\s*q:\s*"((?:[^"\\]|\\.)*)",\s*a:\s*"((?:[^"\\]|\\.)*)"\s*\}/g;
    for (const m of pageContent.matchAll(faqRegex)) {
      faqs.push({
        q: m[1].replace(/\\"/g, '"').replace(/\\n/g, " "),
        a: m[2].replace(/\\"/g, '"').replace(/\\n/g, " "),
      });
    }

    // Extract visible paragraph text from JSX <p>...</p>, stripping tags & expressions
    const paragraphs: string[] = [];
    const pRegex = /<p[^>]*>([\s\S]*?)<\/p>/g;
    for (const m of pageContent.matchAll(pRegex)) {
      const raw = m[1]
        .replace(/\{[^{}]*\}/g, " ") // strip JSX expressions
        .replace(/<[^>]+>/g, " ")
        .replace(/\s+/g, " ")
        .trim();
      if (raw.length >= 40 && /[a-zA-Z]{4,}/.test(raw)) paragraphs.push(raw);
      if (paragraphs.length >= 12) break;
    }

    entries.push({ route, title, description, canonical, h1, subtitle, faqs, paragraphs });
  }

  return entries;
};


const upsertTag = (html: string, regex: RegExp, replacement: string) =>
  regex.test(html) ? html.replace(regex, replacement) : html.replace("</head>", `  ${replacement}\n  </head>`);

const applyRouteSeo = (templateHtml: string, entry: RouteSeoEntry) => {
  let html = templateHtml.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(entry.title)}</title>`);

  html = upsertTag(
    html,
    /<meta\s+name="description"[^>]*>/i,
    `<meta name="description" content="${escapeHtml(entry.description)}" />`,
  );
  html = upsertTag(
    html,
    /<link\s+rel="canonical"[^>]*>/i,
    `<link rel="canonical" href="${escapeHtml(entry.canonical)}" />`,
  );
  html = upsertTag(html, /<meta\s+property="og:title"[^>]*>/i, `<meta property="og:title" content="${escapeHtml(entry.title)}" />`);
  html = upsertTag(
    html,
    /<meta\s+property="og:description"[^>]*>/i,
    `<meta property="og:description" content="${escapeHtml(entry.description)}" />`,
  );
  html = upsertTag(html, /<meta\s+property="og:url"[^>]*>/i, `<meta property="og:url" content="${escapeHtml(entry.canonical)}" />`);
  html = upsertTag(html, /<meta\s+name="twitter:title"[^>]*>/i, `<meta name="twitter:title" content="${escapeHtml(entry.title)}" />`);
  html = upsertTag(
    html,
    /<meta\s+name="twitter:description"[^>]*>/i,
    `<meta name="twitter:description" content="${escapeHtml(entry.description)}" />`,
  );

  // Inject H1 + rich content inside #root so non-JS crawlers see it.
  // React's createRoot().render() replaces all children of #root on mount,
  // so visitors never see this block — it exists purely for crawlers/AI tools.
  const parts: string[] = [];
  parts.push(`<h1>${escapeHtml(entry.h1)}</h1>`);
  if (entry.subtitle) parts.push(`<p>${escapeHtml(entry.subtitle)}</p>`);
  if (entry.description) parts.push(`<p>${escapeHtml(entry.description)}</p>`);
  if (entry.paragraphs && entry.paragraphs.length) {
    for (const p of entry.paragraphs) parts.push(`<p>${escapeHtml(p)}</p>`);
  }
  if (entry.faqs && entry.faqs.length) {
    parts.push(`<h2>Frequently Asked Questions</h2>`);
    for (const f of entry.faqs) {
      parts.push(`<h3>${escapeHtml(f.q)}</h3><p>${escapeHtml(f.a)}</p>`);
    }
  }
  const seoBlock = `<div id="seo-content" style="position:absolute;left:-9999px;top:-9999px;width:1px;height:1px;overflow:hidden">${parts.join("")}</div>`;
  html = html.replace('<div id="root"></div>', `<div id="root">${seoBlock}</div>`);

  return html;
};


const staticRouteSeoPlugin = (): Plugin => ({
  name: "static-route-seo-plugin",
  apply: "build",
  enforce: "post",
  closeBundle() {
    const projectRoot = __dirname;
    const distDir = path.join(projectRoot, "dist");
    const distIndex = path.join(distDir, "index.html");

    if (!fs.existsSync(distIndex)) {
      console.warn("[static-route-seo] dist/index.html not found. Skipping route HTML generation.");
      return;
    }

    const template = fs.readFileSync(distIndex, "utf8");
    const routeSeo = collectRouteSeo(projectRoot);

    routeSeo.forEach((entry) => {
      if (entry.route === "/") {
        fs.writeFileSync(path.join(distDir, "index.html"), applyRouteSeo(template, entry), "utf8");
      } else {
        const slug = entry.route.replace(/^\//, "");
        // Remove old folder-based file if it exists (e.g. dist/sms-marketing/index.html)
        const oldFolder = path.join(distDir, slug);
        if (fs.existsSync(oldFolder) && fs.statSync(oldFolder).isDirectory()) {
          fs.rmSync(oldFolder, { recursive: true });
        }
        // Create flat file (e.g. dist/sms-marketing.html)
        const flatPath = path.join(distDir, `${slug}.html`);
        fs.mkdirSync(path.dirname(flatPath), { recursive: true });
        fs.writeFileSync(flatPath, applyRouteSeo(template, entry), "utf8");
      }
    });

    console.log(`[static-route-seo] Generated static SEO HTML for ${routeSeo.length} routes.`);
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger(), staticRouteSeoPlugin()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
