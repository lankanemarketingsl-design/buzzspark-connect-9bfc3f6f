import { BookOpen, MapPin, Monitor, GraduationCap, ShieldCheck, UserRound, ArrowUpRight, Search, Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import studentBrowsing from "@/assets/studyway-student-macbook.webp";
import tuitionDirectory from "@/assets/studyway-tuition-directory.webp.asset.json";
import educationHome from "@/assets/studyway-education-home.webp.asset.json";
import { tuitionWhatsAppHref } from "@/data/tuitionPackages";

export default function StudyWayShowcase() {
  return (
    <section className="tuition-light py-16 sm:py-20" id="studyway">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-end justify-between gap-5 mb-9">
          <div className="max-w-2xl"><p className="tuition-eyebrow">Tutors, make your next intake easier to discover</p><h2 className="text-3xl sm:text-4xl font-bold mb-3">Let families see the teacher behind the class.</h2><p className="text-muted-foreground">Give students and parents more than a flyer. A profile in the <a href="https://studyway.lk/tuition" target="_blank" rel="noopener noreferrer" className="text-secondary font-semibold underline underline-offset-4">StudyWay.lk tuition section</a> brings your subject, grades, city and teaching details together before they enquire.</p></div>
          <a href="https://studyway.lk/tuition" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-secondary font-semibold">Explore StudyWay Tuition <ArrowUpRight className="w-4 h-4" /></a>
        </div>
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8 items-center">
          <figure className="min-w-0">
            <img src={studentBrowsing} width={1264} height={848} loading="lazy" alt="Illustrative students and parent browsing the supplied StudyWay.lk tuition directory on a MacBook" className="w-full h-auto rounded-lg"/>
            <figcaption className="mt-3 text-xs text-muted-foreground">Illustrative browsing scene featuring the supplied StudyWay.lk tuition directory.</figcaption>
            <div className="grid grid-cols-3 border-t border-border mt-5 pt-5 gap-3">{[[Search,"Find a subject"],[MapPin,"Check the city"],[MessageCircle,"Contact a tutor"]].map(([Icon,label]) => {const I=Icon as typeof Search; return <div key={String(label)} className="flex flex-col gap-2 text-sm font-semibold"><I className="w-5 h-5 text-secondary"/>{String(label)}</div>;})}</div>
          </figure>
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
                <div className="flex flex-wrap gap-3"><Button asChild variant="secondary" className="h-auto min-h-11 whitespace-normal"><a href={tuitionWhatsAppHref("Hi Buzz Connect, I'd like to set up my StudyWay.lk tuition profile. Subject: ___ Grade: ___ Area: ___", "sample_profile_contact")} target="_blank" rel="noopener noreferrer">Create my tutor profile</a></Button><Button asChild variant="outline"><a href="https://studyway.lk/tuition" target="_blank" rel="noopener noreferrer">Browse tutors <ArrowUpRight className="w-4 h-4"/></a></Button></div>
              </div>
            </article>
            <ul className="mt-5 grid gap-3 text-sm">{["Searchable by subject, grade and location","Verified badge builds parent trust","Featured Premium placement on higher packages","Discoverable after your campaign ends"].map(t => <li key={t} className="flex gap-2 items-center"><Check className="w-4 h-4 text-secondary shrink-0"/>{t}</li>)}</ul>
            <p className="text-xs text-muted-foreground mt-4">Premium, verification and featured placement depend on your package and platform requirements.</p>
          </div>
        </div>
        <div className="border-t border-border mt-12 pt-10">
          <div className="max-w-2xl mb-7"><p className="tuition-eyebrow">Inside StudyWay.lk</p><h3 className="text-2xl sm:text-3xl font-bold mb-3">From education browsing to your tutor listing.</h3><p className="text-muted-foreground">See the platform your students and parents can explore — and where your teaching details could appear.</p></div>
          <div className="grid lg:grid-cols-2 gap-7">
            <figure className="min-w-0"><a href="https://studyway.lk/tuition" target="_blank" rel="noopener noreferrer" aria-label="Explore tutor listings in StudyWay.lk tuition" className="block rounded-lg overflow-hidden border border-border focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"><img src={tuitionDirectory.url} width={1352} height={768} loading="lazy" alt="StudyWay.lk tuition directory showing tutor subjects, cities, grades and contact options" className="w-full h-auto"/></a><figcaption className="mt-4"><span className="text-secondary font-semibold">01 · Compare tuition teachers</span><p className="text-sm text-muted-foreground mt-2">Subjects, grades, class formats and contact options help families compare a class before making an enquiry.</p></figcaption></figure>
            <figure className="min-w-0"><a href="https://studyway.lk/tuition" target="_blank" rel="noopener noreferrer" aria-label="Visit the tuition section from StudyWay.lk" className="block rounded-lg overflow-hidden border border-border focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"><img src={educationHome.url} width={1352} height={768} loading="lazy" alt="StudyWay.lk education homepage with its Tuition navigation alongside courses and study options" className="w-full h-auto"/></a><figcaption className="mt-4"><span className="text-secondary font-semibold">02 · Be part of education discovery</span><p className="text-sm text-muted-foreground mt-2">The Tuition section sits alongside education and course browsing, giving families a dedicated place to look for tutors.</p></figcaption></figure>
          </div>
          <p className="text-xs text-muted-foreground mt-5">Supplied StudyWay.lk screenshots. Displayed tutors and advertisements are platform examples, not Buzz Connect campaign results or endorsements. Placement depends on your package and platform requirements.</p>
          <div className="border-y border-border mt-8 py-7 flex flex-wrap items-center justify-between gap-5"><div><h3 className="text-xl font-bold">Ready to put your class on StudyWay?</h3><p className="text-sm text-muted-foreground mt-2">Send your subject, grade and city. Let's plan your profile and class promotion.</p></div><Button asChild variant="secondary" size="lg" className="h-auto min-h-11 whitespace-normal"><a href={tuitionWhatsAppHref("Hi Buzz Connect, I want to try a tuition campaign with a StudyWay.lk profile. Subject: ___ Grade: ___ City: ___ Class format: ___", "studyway_try_campaign")} target="_blank" rel="noopener noreferrer"><MessageCircle className="w-4 h-4 shrink-0"/>Plan my tutor campaign</a></Button></div>
        </div>
      </div>
    </section>
  );
}