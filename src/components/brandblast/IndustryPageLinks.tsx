import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { bb360IndustryDirectory } from "@/data/bb360IndustryRegistry";
export default function IndustryPageLinks({currentPath}:{currentPath:string}) {
  return <section className="bg-primary text-primary-foreground py-12 border-t border-primary-foreground/15"><div className="container mx-auto px-4"><h2 className="font-heading text-2xl font-bold mb-5">Brand Blast 360 industry campaign plans</h2><nav aria-label="Industry campaign pages" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-3">{bb360IndustryDirectory.filter(p=>p.path!==currentPath).map(p=><Link key={p.path} to={p.path} className="flex justify-between items-center gap-3 py-2 border-b border-primary-foreground/10 text-sm text-primary-foreground/75 hover:text-accent">{p.name}<ArrowUpRight className="w-4 h-4 shrink-0"/></Link>)}</nav></div></section>;
}