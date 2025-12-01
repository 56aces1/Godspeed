import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);

async function main() {
  const { data: team } = await supabase.from('teams').insert({ name: '14U Elite', age_group: '14U' }).select().single();
  const { data: coach } = await supabase
    .from('users')
    .insert({ first_name: 'Mike', last_name: 'Davis', email: 'coach@godspeed.com', role: 'coach' })
    .select()
    .single();

  if (team && coach) {
    await supabase.from('teams').update({ coach_id: coach.id }).eq('id', team.id);
  }
}

main();
