import { supabase } from '../supabaseBrowser';

export const handleGithubLogin = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: `${window.location.origin}/auth/callback`,
    },
  });
  if (error) {
    console.error('Error signing in with Github', error);
  }
};
