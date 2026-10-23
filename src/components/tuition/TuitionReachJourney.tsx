import { ArrowDown, ArrowRight, BookOpen, GraduationCap, MessageCircle, Repeat2, Search, Users } from "lucide-react";

const stages = [
  { icon: BookOpen, title: "Discover your class", detail: "Class promotion puts your subject, grade and timetable in view." },
  { icon: Search, title: "Compare on StudyWay", detail: "Families filter by city, district, subject and grade, then check your profile." },
  { icon: Repeat2, title: "See a reminder", detail: "Remarketing reconnects with eligible people who have shown interest." },
  { icon: MessageCircle, title: "Ask about joining", detail: "Students or parents contact you for fees, times and the next intake." },
];

export default function TuitionReachJourney() {
  return <section aria-labelledby="tuition-reach-heading" className="tuition-band py-14 sm:py-16 border-y border-primary-foreground/15">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-between items-end gap-6 mb-10">
        <div className="max-w-2xl"><p className="tuition-eyebrow">Reach the people behind your next intake</p><h2 id="tuition-reach-heading" className="text-3xl sm:text-4xl font-bold mb-4">Students search.<br/><span className="text-accent">Parents help decide.</span></h2><p className="text-primary-foreground/70">Give both a way to discover your class, check the details and return when they are ready to enquire.</p></div>
        <div className="flex gap-6 border-l border-accent/40 pl-5">
          <div><GraduationCap className="w-7 h-7 text-accent mb-2"/><p className="font-bold">Students</p><p className="text-xs text-primary-foreground/60 mt-1">Subject · grade · format</p></div>
          <div><Users className="w-7 h-7 text-secondary mb-2"/><p className="font-bold">Parents</p><p className="text-xs text-primary-foreground/60 mt-1">Location · schedule · details</p></div>
        </div>
      </div>
      <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stages.map(({icon: Icon,title,detail},i) => <li key={title} className="relative border-t border-primary-foreground/20 pt-6">
          <div className="flex justify-between items-center mb-5"><span className={`w-12 h-12 rounded-lg flex items-center justify-center ${i===2 ? "bg-accent text-accent-foreground" : "bg-primary-foreground/10 text-accent"}`}><Icon className="w-6 h-6"/></span><span className="text-xs text-primary-foreground/50">0{i+1}</span>{i<3 && <ArrowRight aria-hidden="true" className="hidden lg:block absolute -right-4 top-9 w-5 h-5 text-accent"/>}</div>
          <h3 className="font-bold text-lg mb-3">{title}</h3><p className="text-sm text-primary-foreground/70 leading-relaxed">{detail}</p>{i<3 && <ArrowDown aria-hidden="true" className="sm:hidden w-5 h-5 text-accent mt-5"/>}
        </li>)}
      </ol>
      <div className="mt-8 flex items-start gap-3 border-l-2 border-accent pl-4"><Repeat2 className="w-5 h-5 text-accent shrink-0 mt-1"/><div><p className="font-semibold">Remarketing is included in every tutor package.</p><p className="text-xs text-primary-foreground/60 mt-2 leading-relaxed">Reach varies by campaign and available audiences. Remarketing needs eligible audiences, consent and tracking where applicable; StudyWay filters support discovery, not guaranteed city-level ad delivery.</p></div></div>
    </div>
  </section>;
}