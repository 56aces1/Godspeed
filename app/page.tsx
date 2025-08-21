'use client';
import './globals.css';
import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { create } from 'zustand';
import { LayoutDashboard, ClipboardList, GraduationCap, MessageCircleMore, ChevronDown, ChevronRight, CheckCircle2, AlertCircle, Circle, PhoneCall, Mail, FileDown, Share2 } from 'lucide-react';

/** THEME */
const THEME = {
  brand: {
    name: 'GodSpeed Recruiting',
    primary: 'bg-gradient-to-r from-blue-600 to-indigo-800',
    primaryText: 'text-white',
  },
  accents: {
    green: '#dff6e4',
    yellow: '#fff3cd',
    red: '#fde2e1',
  },
};

/** GLOBAL STORE */
const useApp = create<any>((set: any, get: any) => ({
  tab: 'dashboard',
  setTab: (tab: string) => set({ tab }),
  athlete: {
    name: 'Anthony Bethel',
    classYear: 2029,
    school: 'Palm Beach Lakes',
    city: 'West Palm Beach',
    state: 'FL',
    height: "6'3\"",
    weight: '205 lbs',
    positionPrimary: 'WR',
    positionSecondary: 'DB',
    photoUrl: 'https://placehold.co/300x300/png',
    contacts: { playerPhone: '+15615551212', playerEmail: 'abphoto561@gmail.com', parentName: 'Parent Name' },
    combine: { forty: '4.4s', proAgility: '4.1s', vertical: '33.4\"', broad: "9'6\"", pushups: 45, situps: 50 },
    academics: { gpa: '3.2', classRank: 'Top 25%', act: '', sat: '', ncaaId: '' },
    media: { hudl: '', youtube: '', x: '', instagram: '' },
    stats: [],
    literacy: { journalStreakWeeks: 3 },
  },
  completion: {
    basic: true,
    athletic: true,
    photo: true,
    academic: false,
    contact: true,
    combine: true,
    stats: false,
    media: false,
    scouting: true,
  },
  setAthlete: (patch: any) => set({ athlete: { ...get().athlete, ...patch } }),
  setCompletion: (patch: any) => set({ completion: { ...get().completion, ...patch } }),
}));

/** APP */
export default function GodSpeedApp() {
  const { tab, setTab } = useApp();
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <TopNav tab={tab} onChange={setTab} />
      <main className="container mx-auto px-4 py-6">
        <AnimatePresence mode="wait">
          {tab === 'dashboard' && (
            <motion.div key="dash" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
              <Dashboard />
            </motion.div>
          )}
          {tab === 'profile' && (
            <motion.div key="profile" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
              <ProfileBuilder />
            </motion.div>
          )}
          {tab === 'messages' && (
            <motion.div key="messages" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
              <CoachMessagingWizard />
            </motion.div>
          )}
          {tab === 'education' && (
            <motion.div key="edu" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
              <EducationCenter />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <footer className="border-t border-zinc-800 text-xs text-zinc-400">
        <div className="container mx-auto px-4 py-6">© {new Date().getFullYear()} {THEME.brand.name}</div>
      </footer>
    </div>
  );
}

/** NAV */
function TopNav({ tab, onChange }: { tab: string; onChange: (t: any) => void }) {
  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'profile', label: 'Profile', icon: <ClipboardList className="w-4 h-4" /> },
    { id: 'messages', label: 'Coach Messaging', icon: <MessageCircleMore className="w-4 h-4" /> },
    { id: 'education', label: 'Education', icon: <GraduationCap className="w-4 h-4" /> },
  ];
  return (
    <div className={`border-b border-zinc-800 ${THEME.brand.primary}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center h-14 gap-2">
          <div className={`font-black ${THEME.brand.primaryText}`}>GodSpeed HQ</div>
          <nav className="ml-auto flex items-center gap-2">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => onChange(t.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm ${tab === t.id ? 'bg-white/10' : 'hover:bg-white/10'}`}
              >
                {t.icon}
                <span>{t.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

/** DASHBOARD */
function Card({ children }: { children: any }) { return <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5">{children}</div>; }
function Progress({ value }: { value: number }) { return (<div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden"><div className="h-full bg-blue-600" style={{ width: `${Math.min(100, Math.max(0, value))}%` }} /></div>); }
function MiniMetric({ label, value }: { label: string; value: any }) { return (<div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-3"><div className="text-xs text-zinc-400">{label}</div><div className="font-semibold">{value}</div></div>); }
function Upsell({ title, bullets }: { title: string; bullets: string[] }) {
  return (<Card><div className="text-lg font-bold mb-2">{title} (Locked)</div><ul className="list-disc list-inside text-sm text-zinc-300">{bullets.map((b,i)=>(<li key={i}>{b}</li>))}</ul><button className="btn mt-3">Upgrade Now</button></Card>);
}

function Dashboard() {
  const { athlete, completion } = useApp();
  const percent = useMemo(() => {
    const vals = Object.values(completion) as boolean[];
    return Math.round((vals.filter(Boolean).length / vals.length) * 100);
  }, [completion]);

  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
        <Card>
          <div className="flex items-center gap-4">
            <img src={athlete.photoUrl} className="w-16 h-16 rounded-full border border-zinc-700" />
            <div>
              <div className="text-xl font-bold">{athlete.name}</div>
              <div className="text-zinc-400 text-sm">{athlete.positionPrimary} / {athlete.positionSecondary} • Class of {athlete.classYear}</div>
            </div>
          </div>
          <div className="mt-4">
            <Progress value={percent} />
            <div className="text-xs text-zinc-400 mt-1">Profile Completion: {percent}%</div>
          </div>
        </Card>

        <Card>
          <div className="font-semibold">Recruiting Streak</div>
          <div className="text-3xl font-black mt-2">0 Days</div>
          <div className="text-xs text-zinc-400 mt-2">Do actions: add contacts • send messages • complete tasks • update profile</div>
        </Card>

        <Card>
          <div className="font-semibold">Saved Schools</div>
          <div className="text-3xl font-black mt-2">0</div>
        </Card>

        <Upsell title="Parent / Sponsor Tier" bullets={["Scholarship manager","NIL page","Travel access"]} />
      </div>

      <div className="lg:col-span-1 space-y-6">
        <Card>
          <div className="font-semibold">Reminders</div>
          <div className="mt-3 text-sm text-zinc-400">Add important dates and tasks.</div>
          <div className="mt-3 flex gap-2">
            <input className="input" placeholder="Add a new reminder…" />
            <button className="btn">+ Add</button>
          </div>
        </Card>

        <Card>
          <div className="font-semibold">Activity Log</div>
          <div className="mt-3 text-sm text-zinc-400">No activity yet.</div>
        </Card>
      </div>
    </div>
  );
}

/** PROFILE BUILDER */
function Section({ title, children, variant, complete, defaultOpen=false }: { title: string; children?: any; variant?: 'warn'|'error'; complete?: boolean; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const color = variant === 'error' ? THEME.accents.red : variant === 'warn' ? THEME.accents.yellow : THEME.accents.green;
  return (
    <div className="rounded-2xl overflow-hidden border border-zinc-800">
      <button className="w-full flex items-center justify-between px-4 py-3 bg-zinc-900/60" onClick={()=>setOpen(!open)}>
        <div className="flex items-center gap-3">
          {complete ? <CheckCircle2 className="w-5 h-5 text-emerald-400"/> : variant === 'error' ? <AlertCircle className="w-5 h-5 text-rose-400"/> : variant === 'warn' ? <AlertCircle className="w-5 h-5 text-amber-400"/> : <Circle className="w-5 h-5 text-zinc-500"/>}
          <div className="font-semibold">{title}</div>
        </div>
        {open ? <ChevronDown className="w-5 h-5"/> : <ChevronRight className="w-5 h-5"/>}
      </button>
      <div className="h-1" style={{ background: color }} />
      {open && <div className="p-4 bg-zinc-950/60">{children}</div>}
    </div>
  );
}
function FormRow({ children }: { children: any }) { return <div className="grid sm:grid-cols-2 gap-3">{children}</div>; }
function Input({ label, value, onChange, placeholder }: { label: string; value: any; onChange: (v: string)=>void; placeholder?: string }) {
  return (<label className="text-sm"><div className="mb-1 text-zinc-300">{label}</div><input value={value} onChange={(e)=>onChange(e.target.value)} placeholder={placeholder} className="input" /></label>);
}

function ProfileBuilder() {
  const { athlete, completion } = useApp();
  const percent = useMemo(() => {
    const vals = Object.values(completion) as boolean[];
    return Math.round((vals.filter(Boolean).length / vals.length) * 100);
  }, [completion]);

  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-1">
        <Card>
          <div className="flex items-center gap-4">
            <img src={athlete.photoUrl} className="w-20 h-20 rounded-full border border-zinc-700" />
            <div>
              <div className="text-lg font-bold">{athlete.name}</div>
              <div className="text-zinc-400 text-sm">{athlete.positionPrimary} • Class of {athlete.classYear}</div>
              <div className="text-zinc-400 text-xs mt-1">{athlete.school} • {athlete.city}, {athlete.state}</div>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
            <MiniMetric label="40 yd" value={athlete.combine.forty} />
            <MiniMetric label="Vert" value={athlete.combine.vertical} />
            <MiniMetric label="Pro Agility" value={athlete.combine.proAgility} />
          </div>
          <div className="mt-4 text-xs text-emerald-300">Journal Streak: 3 weeks</div>
        </Card>
        <Card>
          <div className="font-semibold mb-2">Profile Completion</div>
          <Progress value={percent} />
          <div className="text-xs text-zinc-400 mt-1">{percent}% complete</div>
        </Card>
      </div>
      <div className="lg:col-span-2 space-y-3">
        <Section title="Basic Info" complete={completion.basic}><BasicInfoForm /></Section>
        <Section title="Athletic Info" complete={completion.athletic}><AthleticInfoForm /></Section>
        <Section title="Profile Photo" complete={completion.photo}><PhotoUpload /></Section>
        <Section title="Academic Info" variant="error" complete={completion.academic}><AcademicInfoForm /></Section>
        <Section title="Contact Info" complete={completion.contact}><ContactInfoForm /></Section>
        <Section title="Combine Results" variant="warn" complete={completion.combine}><CombineForm /></Section>
        <Section title="Football Stats" variant="error" complete={completion.stats}><StatsForm /></Section>
        <Section title="Media & Highlights" variant="error" complete={completion.media}><MediaForm /></Section>
        <Section title="Scouting Report" complete={completion.scouting}><ScoutingReport /></Section>
        <Section title="Export & Share Your Profile" defaultOpen>
          <div className="flex flex-wrap items-center gap-3">
            <button className="btn"><FileDown className="w-4 h-4"/> Download PDF</button>
            <button className="btn"><Share2 className="w-4 h-4"/> Share Link</button>
          </div>
        </Section>
      </div>
    </div>
  );
}

function BasicInfoForm(){ const { athlete, setAthlete, setCompletion } = useApp(); const [first, setFirst] = useState((athlete.name||'').split(' ')[0]||''); const [last, setLast] = useState((athlete.name||'').split(' ')[1]||''); return (<FormRow><Input label="First Name" value={first} onChange={setFirst}/><Input label="Last Name" value={last} onChange={setLast}/><Input label="High School" value={athlete.school} onChange={(v)=>setAthlete({ school:v })}/><Input label="City" value={athlete.city} onChange={(v)=>setAthlete({ city:v })}/><Input label="State" value={athlete.state} onChange={(v)=>setAthlete({ state:v })}/><div className="col-span-full"><button className="btn" onClick={()=>{ setAthlete({ name: `${first} ${last}`}); setCompletion({ basic:true }); }}>Save</button></div></FormRow>); }
function AthleticInfoForm(){ const { athlete, setAthlete, setCompletion } = useApp(); return (<FormRow><Input label="Height" value={athlete.height} onChange={(v)=>setAthlete({ height:v })}/><Input label="Weight" value={athlete.weight} onChange={(v)=>setAthlete({ weight:v })}/><Input label="Primary Position" value={athlete.positionPrimary} onChange={(v)=>setAthlete({ positionPrimary:v })}/><Input label="Secondary Position" value={athlete.positionSecondary} onChange={(v)=>setAthlete({ positionSecondary:v })}/><div className="col-span-full"><button className="btn" onClick={()=>setCompletion({ athletic:true })}>Save</button></div></FormRow>); }
function PhotoUpload(){ const { setCompletion } = useApp(); return (<div className="text-sm text-zinc-300"><div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 text-center"><div className="mb-3">Upload your profile photo</div><button className="btn" onClick={()=>setCompletion({ photo:true })}>Choose Photo</button></div></div>); }
function AcademicInfoForm(){ const { athlete, setAthlete, setCompletion } = useApp(); return (<FormRow><Input label="GPA" value={athlete.academics.gpa} onChange={(v)=>setAthlete({ academics:{ ...athlete.academics, gpa:v } })}/><Input label="Class Rank" value={athlete.academics.classRank||''} onChange={(v)=>setAthlete({ academics:{ ...athlete.academics, classRank:v } })}/><Input label="SAT" value={athlete.academics.sat||''} onChange={(v)=>setAthlete({ academics:{ ...athlete.academics, sat:v } })}/><Input label="ACT" value={athlete.academics.act||''} onChange={(v)=>setAthlete({ academics:{ ...athlete.academics, act:v } })}/><Input label="NCAA Eligibility ID" value={athlete.academics.ncaaId||''} onChange={(v)=>setAthlete({ academics:{ ...athlete.academics, ncaaId:v } })}/><div className="col-span-full"><button className="btn" onClick={()=>setCompletion({ academic:true })}>Save</button></div></FormRow>); }
function ContactInfoForm(){ const { athlete, setAthlete, setCompletion } = useApp(); return (<FormRow><Input label="Player Phone" value={athlete.contacts.playerPhone} onChange={(v)=>setAthlete({ contacts:{ ...athlete.contacts, playerPhone:v } })}/><Input label="Player Email" value={athlete.contacts.playerEmail} onChange={(v)=>setAthlete({ contacts:{ ...athlete.contacts, playerEmail:v } })}/><Input label="Parent/Guardian Name" value={athlete.contacts.parentName||''} onChange={(v)=>setAthlete({ contacts:{ ...athlete.contacts, parentName:v } })}/><div className="col-span-full"><button className="btn" onClick={()=>setCompletion({ contact:true })}>Save</button></div></FormRow>); }
function CombineForm(){ const { athlete, setAthlete, setCompletion } = useApp(); return (<FormRow><Input label="40 yd (s)" value={athlete.combine.forty} onChange={(v)=>setAthlete({ combine:{ ...athlete.combine, forty:v } })}/><Input label="Pro Agility (s)" value={athlete.combine.proAgility} onChange={(v)=>setAthlete({ combine:{ ...athlete.combine, proAgility:v } })}/><Input label="Vertical (\")" value={athlete.combine.vertical} onChange={(v)=>setAthlete({ combine:{ ...athlete.combine, vertical:v } })}/><Input label="Broad" value={athlete.combine.broad} onChange={(v)=>setAthlete({ combine:{ ...athlete.combine, broad:v } })}/><Input label="Push-ups" value={String(athlete.combine.pushups)} onChange={(v)=>setAthlete({ combine:{ ...athlete.combine, pushups: Number(v)||0 } })}/><Input label="Sit-ups" value={String(athlete.combine.situps)} onChange={(v)=>setAthlete({ combine:{ ...athlete.combine, situps: Number(v)||0 } })}/><div className="col-span-full"><button className="btn" onClick={()=>setCompletion({ combine:true })}>Save</button></div></FormRow>); }
function StatsForm(){ const { setCompletion } = useApp(); return (<div><div className="text-sm text-zinc-300">Add season stats by year (QB yards, WR receptions, DB INTs, etc.).</div><div className="mt-3"><button className="btn" onClick={()=>setCompletion({ stats:true })}>Save</button></div></div>); }
function MediaForm(){ const { athlete, setAthlete, setCompletion } = useApp(); return (<FormRow><Input label="Hudl URL" value={athlete.media.hudl} onChange={(v)=>setAthlete({ media:{ ...athlete.media, hudl:v } })}/><Input label="YouTube Link" value={athlete.media.youtube} onChange={(v)=>setAthlete({ media:{ ...athlete.media, youtube:v } })}/><Input label="Instagram" value={athlete.media.instagram} onChange={(v)=>setAthlete({ media:{ ...athlete.media, instagram:v } })}/><Input label="X (Twitter)" value={athlete.media.x} onChange={(v)=>setAthlete({ media:{ ...athlete.media, x:v } })}/><div className="col-span-full"><button className="btn" onClick={()=>setCompletion({ media:true })}>Save</button></div></FormRow>); }
function ScoutingReport(){ const { athlete } = useApp(); return (<div className="space-y-3"><div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4"><div className="font-bold">Executive Summary</div><p className="text-sm text-zinc-300 mt-1">{athlete.name} shows promising athletic ability and a strong work ethic. With continued development, he has the potential to become a standout player.</p></div><div className="grid sm:grid-cols-2 gap-3"><InfoCard title="Strengths" color="bg-emerald-900/30 border-emerald-800" items={["athleticism","coachability","work ethic"]}/><InfoCard title="Areas for Growth" color="bg-amber-900/20 border-amber-800" items={["position identification","fundamentals refinement","strength & conditioning"]}/></div><div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4"><div className="font-bold">Actionable Feedback</div><ul className="list-disc list-inside text-sm text-zinc-300 mt-1"><li>Explore different positions to find best fit.</li><li>Improve core football fundamentals.</li><li>Structured S&C + weekly literacy prompts.</li></ul></div><div className="grid sm:grid-cols-2 gap-3"><InfoCard title="Age‑for‑Grade Context" items={["14‑year‑old freshman; long runway for development."]}/><InfoCard title="Academic Note" items={["Maintain eligibility; aim for 3.0+ core."]}/></div></div>); }
function InfoCard({ title, items, color }: { title: string; items: string[]; color?: string }) { return (<div className={`rounded-2xl border ${color?color:'border-zinc-800 bg-zinc-900/40'} p-4`}><div className="font-bold">{title}</div><ul className="list-disc list-inside text-sm text-zinc-300 mt-1">{items.map((x,i)=>(<li key={i}>{x}</li>))}</ul></div>); }

/** MESSAGING (simplified) */
function UsageCard({ title, plan, limit, used }: { title: string; plan: string; limit: string; used: number }) { return (<div className="rounded-2xl border border-zinc-800 overflow-hidden"><div className={`px-5 py-4 ${THEME.brand.primary} text-white font-semibold`}>{title}</div><div className="p-5 bg-zinc-900/40 text-sm text-zinc-300"><div>Plan: {plan}</div><div>Monthly Limit: {limit}</div><div>Messages Used: {used}</div></div></div>); }
function Steps({ step }: { step: number }) { const items = ['Choose Template','Select Coach','Profile Info','Customize','Send']; return (<Card><div className="flex items-center gap-2 flex-wrap">{items.map((label,i)=>(<div key={i} className={`px-3 py-1.5 rounded-full text-xs border ${i+1<=step?'border-blue-500 text-blue-300':'border-zinc-700 text-zinc-400'}`}>{label}</div>))}</div></Card>); }
function CoachMessagingWizard(){ const [step,setStep]=useState(1); const [template,setTemplate]=useState('Initial Introduction'); const [coach,setCoach]=useState<any>(null); const { athlete }=useApp(); return (<div className="grid lg:grid-cols-3 gap-6"><div className="lg:col-span-1 space-y-3"><UsageCard title="Your Usage" plan="Free" limit="3 messages" used={0}/><Steps step={step}/></div><div className="lg:col-span-2 space-y-4">{step===1&&(<Card><h3 className="font-bold">Choose Your Message Template</h3><div className="mt-3 grid sm:grid-cols-2 gap-3">{['Initial Introduction','Highlight Reel Follow‑up','X DM Introduction','Program Questions','Thank You Note','Detailed Introduction'].map((t)=>(<button key={t} className={`p-4 rounded-2xl border text-left ${template===t?'border-blue-500 bg-blue-500/10':'border-zinc-800 bg-zinc-900/40'}`} onClick={()=>setTemplate(t)}><div className="font-semibold">{t}</div><div className="text-xs text-zinc-400 mt-1">Email</div></button>))}</div><div className="mt-4"><button className="btn" onClick={()=>setStep(2)}>Select Coach</button></div></Card>)}{step===2&&(<Card><h3 className="font-bold">Select a Coach</h3><div className="mt-3 grid gap-2">{['James Colzie III','Jennifer Santiago','Andre Pope','James Spady'].map((c)=>(<button key={c} onClick={()=>setCoach({ name:c, title:'Coach', school:'Florida A&M University', method:'Email' })} className={`p-3 rounded-xl border ${coach?.name===c?'border-blue-500 bg-blue-500/10':'border-zinc-800 bg-zinc-900/40'}`}><div className="font-semibold">{c}</div><div className="text-xs text-zinc-400">Florida A&M University • Email</div></button>))}</div><div className="mt-4 flex gap-2"><button className="btn-secondary" onClick={()=>setStep(1)}>Back</button><button className="btn" onClick={()=>setStep(3)} disabled={!coach}>Continue</button></div></Card>)}{step===3&&(<Card><h3 className="font-bold">Profile Information Preview</h3><div className="mt-3 text-sm rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4"><div className="text-zinc-300">To: <span className="font-semibold">{coach?.name}</span> — {coach?.school}</div><p className="mt-3 bg-zinc-950/60 rounded-xl p-3">Hi Coach {coach?.name?.split(' ')[0]},<br/><br/>My name is {athlete.name} and I'm a {athlete.positionPrimary} from {athlete.school} (Class of {athlete.classYear}). I'm reaching out to express my interest in {coach?.school} and would love to learn more about your program.<br/><br/>I've attached my player profile with my highlight film and would appreciate any feedback you might have. I believe I could be a great fit for your program. I look forward to the next step in the process!</p></div><div className="mt-4 flex gap-2"><button className="btn-secondary" onClick={()=>setStep(2)}>Back</button><button className="btn" onClick={()=>setStep(4)}>Continue</button></div></Card>)}{step===4&&(<Card><h3 className="font-bold">Customize Message</h3><div className="mt-3 grid gap-3"><div className="text-xs text-emerald-400">Email sent directly to inbox.</div><input className="input" defaultValue={`Student‑Athlete Introduction - ${athlete.name}`}/><textarea className="input min-h-[220px]" defaultValue={`Hi Coach ${coach?.name},\n\nMy name is ${athlete.name} and I'm a ${athlete.positionPrimary} from ${athlete.school} (Class of ${athlete.classYear}). I'm reaching out to express my interest in ${coach?.school} and would love to learn more about your program.\n\nI've attached my player profile with my highlight film and would appreciate any feedback you might have. I believe I could be a great fit for your program. I look forward to the next step in the process!\n\nYou can view my complete profile here: https://godspeed.app/player/slug-here`}></textarea></div><div className="mt-4 flex gap-2"><button className="btn-secondary" onClick={()=>setStep(3)}>Back</button><button className="btn" onClick={()=>setStep(5)}>Review & Send</button></div></Card>)}{step===5&&(<Card><h3 className="font-bold">Send</h3><div className="mt-3 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4"><div className="text-sm">Your message to <b>{coach?.name}</b> is ready. Choose a channel and send.</div><div className="mt-3 flex flex-wrap gap-2"><button className="btn"><Mail className="w-4 h-4"/> Email</button><button className="btn-secondary"><MessageCircleMore className="w-4 h-4"/> X DM</button><button className="btn-secondary"><PhoneCall className="w-4 h-4"/> SMS</button></div></div><div className="mt-4"><button className="btn-secondary" onClick={()=>setStep(1)}>Start another</button></div></Card>)}</div></div>); }

/** EDUCATION */
function GradientCard({ title, items, grad, cta }: { title: string; items: string[]; grad: string; cta?: string }) {
  return (
    <div className="rounded-2xl border border-zinc-800 overflow-hidden">
      <div className={`px-5 py-4 ${'bg-gradient-to-r ' + grad} text-white font-semibold`}>{title}</div>
      <div className="p-5 bg-zinc-900/40">
        {items?.length ? (
          <ul className="grid sm:grid-cols-2 gap-2 text-sm text-zinc-200 list-disc list-inside">
            {items.map((x,i)=>(<li key={i}>{x}</li>))}
          </ul>
        ) : (
          <div className="text-sm text-zinc-400">Master recruiting rules, requirements & timelines.</div>
        )}
        {cta && <button className="btn mt-4">{cta}</button>}
      </div>
    </div>
  );
}

function EducationCenter(){
  const blocks = [
    { title: 'Education Center', items: [], grad: 'from-blue-600 to-indigo-800' },
    { title: 'Core Course Requirements', items: ['4 years English','3 years math (Alg I or higher)','2 years natural/physical science (1 lab)','2 years social science','4 additional approved core'], grad: 'from-emerald-500 to-teal-600' },
    { title: 'GPA Calculator', items: ['Track core grades & credits','Auto‑calculate cumulative GPA','Honors/AP bonus (if allowed)','Monitor NCAA eligibility'], grad: 'from-indigo-500 to-blue-600', cta: 'Open GPA Calculator' },
    { title: 'Test Score Sliding Scale', items: ['Higher GPA allows lower test scores','D1 minimum 2.3 core GPA','SAT 900 or ACT 68 minimum (example)','Use scale to find requirements'], grad: 'from-fuchsia-500 to-violet-600' },
    { title: 'Academic Timeline', items: ['9th: Core course foundation','10th: PSAT + strong GPA','11th: SAT/ACT + NCAA register','12th: Final transcripts'], grad: 'from-orange-500 to-amber-600' },
    { title: 'Contact Rules', items: ['No contact before Sept 1 junior year','Limited calls/texts during certain periods','Official visits after Aug 1 before senior year'], grad: 'from-rose-500 to-pink-600' },
    { title: 'Dead Period Guide', items: ['No in‑person contact','Calls/e‑comm allowed','Plan around these periods'], grad: 'from-cyan-600 to-blue-700' },
    { title: 'Recruiting Timeline Checklist', items: ['Grade‑specific actions','Seasonal planning','Academic + athletic prep'], grad: 'from-indigo-600 to-blue-700', cta: 'View Full Timeline' },
  ];
  return (<div className="space-y-4">{blocks.map((b,i)=>(<GradientCard key={i} title={b.title} items={b.items} grad={b.grad} cta={b.cta}/>))}<Card><div className="font-semibold mb-2">Need Help?</div><div className="grid sm:grid-cols-2 gap-3"><button className="btn">Schedule Consultation</button><button className="btn-secondary">View Plans & Pricing</button></div></Card></div>);
}
