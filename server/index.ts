import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';

const app = express();
app.use(cors());
app.use(bodyParser.json());

const supabase = createClient(process.env.SUPABASE_URL || '', process.env.SUPABASE_SERVICE_ROLE_KEY || '');

app.get('/api/athletes', async (_req, res) => {
  const { data, error } = await supabase.from('athletes').select('*');
  if (error) return res.status(500).json({ error: error.message });
  return res.json(data);
});

app.post('/api/metrics', async (req, res) => {
  const { data, error } = await supabase.from('metrics').insert(req.body).select();
  if (error) return res.status(500).json({ error: error.message });
  return res.json(data);
});

app.post('/api/xp/award', async (req, res) => {
  const { athlete_id, delta } = req.body;
  const { data, error } = await supabase.rpc('increment_xp', { athlete_id_input: athlete_id, delta_input: delta });
  if (error) return res.status(500).json({ error: error.message });
  return res.json(data);
});

app.listen(process.env.PORT || 4000, () => {
  console.log('Express API running');
});
