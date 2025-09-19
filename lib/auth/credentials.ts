import { supabase } from '@/lib/supabaseBrowser';

export async function signInWithEmail(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data.user;
}

export async function signUpWithEmail(params: {
  email: string;
  password: string;
  fullName?: string;
}) {
  const { email, password, fullName } = params;
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: fullName ? { full_name: fullName } : undefined,
      // Send Supabase confirmation emails to our callback route
      emailRedirectTo: `${window.location.origin}/auth/callback`,
    },
  });
  if (error) throw error;
  return data.user;
}
