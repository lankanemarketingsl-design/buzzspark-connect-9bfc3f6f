import { BookOpen, MapPin, Monitor, GraduationCap, ShieldCheck, UserRound, ArrowUpRight, Search, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import screenshot from "@/assets/studyway-tuition-showcase.webp.asset.json";
import { tuitionWhatsAppHref } from "@/data/tuitionPackages";

export default function StudyWayShowcase() {
  return (
    <section className="tuition-light py-16 sm:py-20" id="studyway">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-end justify-between gap-5 mb-9">
          <div className="max-w-2xl"><p className="tuition-eyebrow">Your always-on classroom window</p><h2 className="text-3xl sm:text-4xl font-bold mb-3">This is where students will find you.</h2><p className="text-muted-foreground">A class promotion gets attention. A complete StudyWay.lk tutor profile gives students and parents the details they need to take the next step.</p></div>
          <a href="https://studyway.lk/tuition" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-secondary font-semibold">Explore StudyWay Tuition <ArrowUpRight className="w-4 h-4" /></a>
        </div>
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8 items-center">
          <div className="rounded-lg border border-border overflow-hidden shadow-card bg-card">
            <div className="flex items-center gap-3 border-b border-border bg-muted px-4 py-3"><div className="flex gap-1.5" aria-hidden="true"><span className="w-2 h-2 rounded-full bg-muted-foreground/30"/><span className="w-2 h-2 rounded-full bg-muted-foreground/30"/><span className="w-2 h-2 rounded-full bg-muted-foreground/30"/></div><span className="flex-1 text-xs text-muted-foreground flex justify-center items-center gap-2"><ShieldCheck className="w-3 h-3"/> studyway.lk/tuition</span><ArrowUpRight className="w-4 h-4 text-muted-foreground"/></div>
            <img src={screenshot.url} width={299} height={323} loading="lazy" alt="StudyWay.lk Tuition directory showing subject and location filters, Featured Premium Tutors and tutor listings" className="w-full h-auto"/>
            <div className="px-4 py-3 border-t border-border text-xs text-muted-foreground">StudyWay.lk Tuition directory • supplied screenshot</div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-3"><p className="text-sm font-semibold text-secondary">Sample — your profile</p><span className="text-xs text-muted-foreground">Illustrative tutor listing</span></div>
            <article className="bg-card border border-accent/60 rounded-lg overflow-hidden shadow-card">
              <div className="h-2 bg-accent"/>
              <div className="p-5 sm:p-6">
                <div className="flex items-start gap-4 mb-5"><div className="w-16 h-16 flex items-center justify-center bg-secondary/10 rounded-lg shrink-0"><UserRound className="w-9 h-9 text-secondary"/></div><div><h3 className="text-xl font-bold mb-2">Your Name Here</h3><div className="flex flex-wrap gap-1.5"><span className="tuition-profile-tag bg-accent/20 text-accent-foreground">Premium</span><span className="tuition-profile-tag bg-secondary/10 text-secondary"><ShieldCheck className="w-3 h-3"/> Verified</span><span className="tuition-profile-tag bg-muted text-muted-foreground">Online</span></div></div></div>
                <dl className="space-y-3 text-sm">
                  {[[BookOpen,"Subject","Your subject"],[MapPin,"City","Your city / island-wide"],[GraduationCap,"Grades","O/L · A/L · your grades"],[Monitor,"Class type","Online / Physical / Hybrid"]].map(([Icon,label,value]) => { const I = Icon as typeof BookOpen; return <div key={String(label)} className="flex items-center gap-3"><I className="w-4 h-4 text-secondary shrink-0"/><dt className="text-muted-foreground w-20 shrink-0">{String(label)}</dt><dd className="font-medium">{String(value)}</dd></div>; })}
                </dl>
                <p className="text-xs text-muted-foreground mt-5 mb-5 border-t border-border pt-4">Your teaching experience, medium and class schedule — all in one place.</p>
                <div className="grid grid-cols-2 gap-3"><Button asChild variant="secondary"><a href={tuitionWhatsAppHref("Hi Buzz Connect, I'd like to set up my StudyWay.lk tuition profile. Subject: ___ Grade: ___ Area: ___", "sample_profile_contact")} target="_blank" rel="noopener noreferrer">Contact</a></Button><Button asChild variant="outline"><a href="https://studyway.lk/tuition" target="_blank" rel="noopener noreferrer">View Profile <ArrowUpRight className="w-4 h-4"/></a></Button></div>
              </div>
            </article>
            <ul className="mt-5 grid gap-3 text-sm">{["Searchable by subject, grade and location","Verified badge builds parent trust","Featured Premium placement on higher packages","Discoverable after your campaign ends"].map(t => <li key={t} className="flex gap-2 items-center"><Check className="w-4 h-4 text-secondary shrink-0"/>{t}</li>)}</ul>
            <p className="text-xs text-muted-foreground mt-4">Premium, verification and featured placement depend on your package and platform requirements.</p>
          </div>
        </div>
      </div>
    </section>
  );
}