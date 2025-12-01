create or replace function public.increment_xp(athlete_id_input uuid, delta_input int)
returns void as $$
begin
  update xp_system
  set xp = coalesce(xp,0) + delta_input,
      updated_at = now()
  where athlete_id = athlete_id_input;
end;
$$ language plpgsql;
