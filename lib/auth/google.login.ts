import { supabase } from '@/lib/supabaseBrowser';

export const handleGoogleLogin = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${window.location.origin}/auth/callback`,
    },
  });
  if (error) {
    console.error('Error signing in with Google', error);
  }
};
