'use client';

import { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-16 text-white">
      <Card>
        <div className="w-[360px] space-y-4">
          <div className="space-y-1 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-blue-200">GodSpeed Academy</p>
            <h1 className="text-2xl font-black">Sign In</h1>
            <p className="text-sm text-slate-400">Magic link or password via Supabase Auth.</p>
          </div>
          <label className="space-y-1 text-sm">
            <span>Email</span>
            <input
              className="input"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="space-y-1 text-sm">
            <span>Password</span>
            <input
              className="input"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <Button className="w-full">Sign In</Button>
          <Button className="w-full" variant="secondary">
            Send Magic Link
          </Button>
        </div>
      </Card>
    </div>
  );
}
