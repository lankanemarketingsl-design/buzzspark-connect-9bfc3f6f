# Architecture rules

- Import route pages eagerly to preserve the existing Vite SPA navigation pattern.
- Keep tuition package prices, inclusions, FAQs, structured data and WhatsApp link construction in one shared data module so browser and static search metadata use the same values.
- Generate standalone tuition search HTML through the existing static-route SEO plugin, with a self-referencing canonical and shared Service/FAQ schemas, to preserve flat-file hosting compatibility.
- Use project asset pointers for uploaded media and direct imports for generated page images so media follows the existing hosting flow.
- Keep Brand Blast industry route mappings and additional industry content in the shared industry registry; browser pages, hub links and static HTML generation consume it to prevent missing campaign URLs.
- Brand Blast industry canonicals and service schema reference the published host consistently; keep static fallback content inside the React root so it does not leave a duplicate H1 after rendering.