-- Supabase / Postgres schema for GodSpeed Academy
create table if not exists users (
  id uuid primary key default gen_random_uuid(),
  role text check (role in ('athlete','parent','coach','admin')) not null,
  first_name text not null,
  last_name text not null,
  email text unique not null,
  phone text,
  password_hash text,
  created_at timestamptz default now()
);

create table if not exists teams (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  age_group text,
  coach_id uuid references users(id),
  created_at timestamptz default now()
);

create table if not exists athletes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id),
  team_id uuid references teams(id),
  grade integer,
  age integer,
  height text,
  weight text,
  position text,
  parent_id uuid references users(id),
  profile_photo text,
  created_at timestamptz default now()
);

create table if not exists metrics (
  id uuid primary key default gen_random_uuid(),
  athlete_id uuid references athletes(id) on delete cascade,
  forty_time numeric,
  shuttle numeric,
  vertical numeric,
  pushups integer,
  situps integer,
  snap_attack_catches integer,
  speed_score integer,
  strength_score integer,
  updated_at timestamptz default now()
);

create table if not exists literacy (
  id uuid primary key default gen_random_uuid(),
  athlete_id uuid references athletes(id) on delete cascade,
  reading_streak integer default 0,
  journal_entries integer default 0,
  vocabulary_mastery integer default 0,
  weekly_assignment text,
  coach_notes text,
  updated_at timestamptz default now()
);

create table if not exists leadership (
  id uuid primary key default gen_random_uuid(),
  athlete_id uuid references athletes(id) on delete cascade,
  leadership_points integer default 0,
  attendance_score integer default 0,
  discipline_flags integer default 0,
  character_notes text,
  updated_at timestamptz default now()
);

create table if not exists xp_system (
  id uuid primary key default gen_random_uuid(),
  athlete_id uuid references athletes(id) on delete cascade,
  xp integer default 0,
  rank text,
  badges text[],
  streak_count integer default 0,
  updated_at timestamptz default now()
);

create table if not exists events (
  id uuid primary key default gen_random_uuid(),
  event_type text check (event_type in ('practice','tournament','meeting')),
  date date,
  location text,
  notes text,
  created_at timestamptz default now()
);

create table if not exists notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id),
  title text,
  message text,
  type text,
  created_at timestamptz default now()
);
