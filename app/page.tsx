
'use client';
import { useMemo, useState } from 'react';
import { create } from 'zustand';

type Athlete = {
  name: string;
  classYear: number;
  school: string;
  city: string;
  state: string;
  height: string;
  weight: string;
  positionPrimary: string;
  positionSecondary: string;
  photoUrl: string;
  contacts: { playerPhone: string; playerEmail: string; parentName?: string };
  combine: { forty: string; proAgility: string; vertical: string; broad: string; pushups: number; situps: number };
  academics: { gpa: string; classRank?: string; act?: string; sat?: string; ncaaId?: string };
  media: { hudl: string; youtube: string; x: string; instagram: string };
};

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
    photoUrl: 'https://placehold.co/160x160/png',
    contacts: { playerPhone: '+15615551212', playerEmail: 'abphoto561@gmail.com', parentName: '' },
    combine: { forty: '4.4s', proAgility: '4.1s', vertical: '33.4"', broad: "9\'6\'", pushups: 45, situps: 50 },
    academics: { gpa: '3.2', classRank: 'Top 25%', act: '', sat: '', ncaaId: '' },
    media: { hudl: '', youtube: '', x: '', instagram: '' },
  } as Athlete,
  completion: { basic: true, athletic: true, photo: true, academic: false, contact: true, combine: true, stats: false, media: false, scouting: true },
  setAthlete: (patch: Partial<Athlete>) => set({ athlete: { ...get().athlete, ...patch } }),
  setCompletion: (patch: any) => set({ completion: { ...get().completion, ...patch } }),
}));

export default function Page() {
  const { tab, setTab } = useApp();
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <header className="border-b border-zinc-800 bg-gradient-to-r from-blue-600 to-indigo-800">
        <div className="container mx-auto px-4 h-14 flex items-center gap-2">
          <div className="font-black">GodSpeed HQ</div>
          <nav className="ml-auto flex items-center gap-2 text-sm">
            {['dashboard','profile'].map((t)=>(
              <button key={t} onClick={()=>setTab(t)} className={\`px-3 py-1.5 rounded-lg \${tab===t?'bg-white/10':''}\`}>{t[0].toUpperCase()+t.slice(1)}</button>
            ))}
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-6">
        {tab==='dashboard' && <Dashboard/>}
        {tab==='profile' && <ProfileBuilder/>}
      </main>
    </div>
  );
}

function Card({ children }: { children: any }) { return <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5">{children}</div>; }
function Progress({ value }: { value: number }) { return (<div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden"><div className="h-full bg-blue-600" style={{ width: \`\${Math.min(100, Math.max(0, value))}%\` }} /></div>); }
function MiniMetric({ label, value }: { label: string; value: any }) { return (<div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-3"><div className="text-xs text-zinc-400">{label}</div><div className="font-semibold">{value}</div></div>); }
function FormRow({ children }: { children: any }) { return <div className="grid sm:grid-cols-2 gap-3">{children}</div>; }
function Input({ label, value, onChange, placeholder }: { label: string; value: any; onChange: (v: string)=>void; placeholder?: string }) { return (<label className="text-sm"><div className="mb-1 text-zinc-300">{label}</div><input value={value} onChange={(e)=>onChange(e.target.value)} placeholder={placeholder} className="w-full rounded-xl border border-zinc-800 bg-zinc-900/60 px-3 py-2 text-sm text-white" /></label>); }

function Dashboard() {
  const { athlete, completion } = useApp();
  const percent = useMemo(() => { const vals = Object.values(completion) as boolean[]; return Math.round((vals.filter(Boolean).length / vals.length) * 100); }, [completion]);
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
        <Card><div className="font-semibold">Recruiting Streak</div><div className="text-3xl font-black mt-2">0 Days</div></Card>
        <Card><div className="font-semibold">Saved Schools</div><div className="text-3xl font-black mt-2">0</div></Card>
      </div>
      <div className="lg:col-span-1 space-y-6">
        <Card><div className="font-semibold">Reminders</div><div className="mt-3 text-sm text-zinc-400">Add important dates and tasks.</div><div className="mt-3 flex gap-2"><input className="w-full rounded-xl border border-zinc-800 bg-zinc-900/60 px-3 py-2 text-sm" placeholder="Add a new reminder…" /><button className="rounded-xl bg-blue-600 px-3 py-2 text-sm">+ Add</button></div></Card>
        <Card><div className="font-semibold">Activity Log</div><div className="mt-3 text-sm text-zinc-400">No activity yet.</div></Card>
      </div>
    </div>
  );
}

function ProfileBuilder() {
  const { athlete, completion } = useApp();
  const percent = useMemo(() => { const vals = Object.values(completion) as boolean[]; return Math.round((vals.filter(Boolean).length / vals.length) * 100); }, [completion]);
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
        <Card><div className="font-semibold mb-2">Profile Completion</div><Progress value={percent} /><div className="text-xs text-zinc-400 mt-1">{percent}% complete</div></Card>
      </div>
      <div className="lg:col-span-2 space-y-3">
        <Section title="Basic Info" complete={completion.basic}><BasicInfoForm /></Section>
        <Section title="Athletic Info" complete={completion.athletic}><AthleticInfoForm /></Section>
        <Section title="Profile Photo" complete={completion.photo}><PhotoUpload /></Section>
        <Section title="Academic Info" complete={completion.academic}><AcademicInfoForm /></Section>
        <Section title="Contact Info" complete={completion.contact}><ContactInfoForm /></Section>
        <Section title="Combine Results" complete={completion.combine}><CombineForm /></Section>
        <Section title="Football Stats" complete={completion.stats}><StatsForm /></Section>
        <Section title="Media & Highlights" complete={completion.media}><MediaForm /></Section>
        <Section title="Scouting Report" complete={completion.scouting}><ScoutingReport /></Section>
      </div>
    </div>
  );
}

function Section({ title, children, complete=false }: { title: string; children?: any; complete?: boolean }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="rounded-2xl overflow-hidden border border-zinc-800">
      <button className="w-full flex items-center justify-between px-4 py-3 bg-zinc-900/60" onClick={()=>setOpen(!open)}>
        <div className="font-semibold">{title}</div>
        <span className="text-xs">{open ? '▾' : '▸'}</span>
      </button>
      {open && <div className="p-4 bg-zinc-950/60">{children}</div>}
    </div>
  );
}

function BasicInfoForm(){
  const { athlete, setAthlete, setCompletion } = useApp();
  const [first, setFirst] = useState((athlete.name||'').split(' ')[0]||'');
  const [last, setLast] = useState((athlete.name||'').split(' ')[1]||'');
  return (
    <FormRow>
      <Input label="First Name" value={first} onChange={setFirst}/>
      <Input label="Last Name" value={last} onChange={setLast}/>
      <Input label="High School" value={athlete.school} onChange={(v)=>setAthlete({ school:v })}/>
      <Input label="City" value={athlete.city} onChange={(v)=>setAthlete({ city:v })}/>
      <Input label="State" value={athlete.state} onChange={(v)=>setAthlete({ state:v })}/>
      <div className="col-span-full">
        <button className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold" onClick={()=>{ setAthlete({ name: \`\${first} \${last}\`}); setCompletion({ basic:true }); }}>Save</button>
      </div>
    </FormRow>
  );
}

function AthleticInfoForm(){ const { athlete, setAthlete, setCompletion } = useApp(); return (<FormRow><Input label="Height" value={athlete.height} onChange={(v)=>setAthlete({ height:v })}/><Input label="Weight" value={athlete.weight} onChange={(v)=>setAthlete({ weight:v })}/><Input label="Primary Position" value={athlete.positionPrimary} onChange={(v)=>setAthlete({ positionPrimary:v })}/><Input label="Secondary Position" value={athlete.positionSecondary} onChange={(v)=>setAthlete({ positionSecondary:v })}/><div className="col-span-full"><button className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold" onClick={()=>setCompletion({ athletic:true })}>Save</button></div></FormRow>); }
function PhotoUpload(){ const { setCompletion } = useApp(); return (<div className="text-sm text-zinc-300"><div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 text-center"><div className="mb-3">Upload your profile photo</div><button className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold" onClick={()=>setCompletion({ photo:true })}>Choose Photo</button></div></div>); }
function AcademicInfoForm(){ const { athlete, setAthlete, setCompletion } = useApp(); return (<FormRow><Input label="GPA" value={athlete.academics.gpa} onChange={(v)=>setAthlete({ academics:{ ...athlete.academics, gpa:v } })}/><Input label="Class Rank" value={athlete.academics.classRank||''} onChange={(v)=>setAthlete({ academics:{ ...athlete.academics, classRank:v } })}/><Input label="SAT" value={athlete.academics.sat||''} onChange={(v)=>setAthlete({ academics:{ ...athlete.academics, sat:v } })}/><Input label="ACT" value={athlete.academics.act||''} onChange={(v)=>setAthlete({ academics:{ ...athlete.academics, act:v } })}/><Input label="NCAA Eligibility ID" value={athlete.academics.ncaaId||''} onChange={(v)=>setAthlete({ academics:{ ...athlete.academics, ncaaId:v } })}/><div className="col-span-full"><button className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold" onClick={()=>setCompletion({ academic:true })}>Save</button></div></FormRow>); }
function ContactInfoForm(){ const { athlete, setAthlete, setCompletion } = useApp(); return (<FormRow><Input label="Player Phone" value={athlete.contacts.playerPhone} onChange={(v)=>setAthlete({ contacts:{ ...athlete.contacts, playerPhone:v } })}/><Input label="Player Email" value={athlete.contacts.playerEmail} onChange={(v)=>setAthlete({ contacts:{ ...athlete.contacts, playerEmail:v } })}/><Input label="Parent/Guardian Name" value={athlete.contacts.parentName||''} onChange={(v)=>setAthlete({ contacts:{ ...athlete.contacts, parentName:v } })}/><div className="col-span-full"><button className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold" onClick={()=>setCompletion({ contact:true })}>Save</button></div></FormRow>); }
function CombineForm(){ const { athlete, setAthlete, setCompletion } = useApp(); return (<FormRow><Input label="40 yd (s)" value={athlete.combine.forty} onChange={(v)=>setAthlete({ combine:{ ...athlete.combine, forty:v } })}/><Input label="Pro Agility (s)" value={athlete.combine.proAgility} onChange={(v)=>setAthlete({ combine:{ ...athlete.combine, proAgility:v } })}/><Input label='Vertical (")' value={athlete.combine.vertical} onChange={(v)=>setAthlete({ combine:{ ...athlete.combine, vertical:v } })}/><Input label="Broad" value={athlete.combine.broad} onChange={(v)=>setAthlete({ combine:{ ...athlete.combine, broad:v } })}/><Input label="Push-ups" value={String(athlete.combine.pushups)} onChange={(v)=>setAthlete({ combine:{ ...athlete.combine, pushups: Number(v)||0 } })}/><Input label="Sit-ups" value={String(athlete.combine.situps)} onChange={(v)=>setAthlete({ combine:{ ...athlete.combine, situps: Number(v)||0 } })}/><div className="col-span-full"><button className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold" onClick={()=>setCompletion({ combine:true })}>Save</button></div></FormRow>); }
function StatsForm(){ const { setCompletion } = useApp(); return (<div><div className="text-sm text-zinc-300">Add season stats by year (QB yards, WR receptions, DB INTs, etc.).</div><div className="mt-3"><button className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold" onClick={()=>setCompletion({ stats:true })}>Save</button></div></div>); }
function MediaForm(){ const { athlete, setAthlete, setCompletion } = useApp(); return (<FormRow><Input label="Hudl URL" value={athlete.media.hudl} onChange={(v)=>setAthlete({ media:{ ...athlete.media, hudl:v } })}/><Input label="YouTube Link" value={athlete.media.youtube} onChange={(v)=>setAthlete({ media:{ ...athlete.media, youtube:v } })}/><Input label="Instagram" value={athlete.media.instagram} onChange={(v)=>setAthlete({ media:{ ...athlete.media, instagram:v } })}/><Input label="X (Twitter)" value={athlete.media.x} onChange={(v)=>setAthlete({ media:{ ...athlete.media, x:v } })}/><div className="col-span-full"><button className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold" onClick={()=>setCompletion({ media:true })}>Save</button></div></FormRow>); }
function ScoutingReport(){ const { athlete } = useApp(); return (<div className="space-y-3"><div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4"><div className="font-bold">Executive Summary</div><p className="text-sm text-zinc-300 mt-1">{athlete.name} shows promising athletic ability and a strong work ethic. With continued development, he has the potential to become a standout player.</p></div></div>); }
