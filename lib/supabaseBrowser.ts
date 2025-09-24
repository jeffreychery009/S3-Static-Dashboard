'use client';
import { createClient } from '@supabase/supabase-js';

let supabaseClient: ReturnType<typeof createClient> | null = null;

export function getSupabaseBrowser() {
  if (!supabaseClient) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Missing Supabase environment variables');
    }

    supabaseClient = createClient(supabaseUrl, supabaseKey, {
      auth: { persistSession: true },
    });
  }

  return supabaseClient;
}

// For backward compatibility - only create if we're in the browser
export const supabase = typeof window !== 'undefined' ? getSupabaseBrowser() : null;
