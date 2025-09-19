// lib/entries.ts
import { supabase } from '@/lib/supabaseBrowser';

export type EntryStatus = 'pending' | 'processing' | 'success' | 'failed';

export type Entry = {
  id: string;
  amount: number; // Supabase may return numeric as string; cast if needed.
  status: EntryStatus;
  limit_amount: number;
  email: string;
  owner_id: string;
  created_at: string;
  updated_at: string;
};

type EntryRow = Omit<Entry, 'amount'> & { amount: number | string };

export async function listEntries(): Promise<Entry[]> {
  const { data, error } = await supabase
    .from('entries')
    .select('id, amount, status, limit_amount, email, owner_id, created_at, updated_at')
    .order('created_at', { ascending: false });
  if (error) throw error;
  const rows = (data ?? []) as EntryRow[];
  return rows.map((e) => ({ ...e, amount: Number(e.amount) }));
}

export async function createEntry(input: {
  amount: number;
  status: EntryStatus;
  limit_amount: number;
  email: string;
}): Promise<Entry> {
  // Require an authenticated user so we can set owner_id
  const userRes = await supabase.auth.getUser();
  const userId = userRes.data.user?.id;
  if (!userId) throw new Error('Not authenticated');
  const { data, error } = await supabase
    .from('entries')
    .insert({
      amount: input.amount,
      status: input.status,
      limit_amount: input.limit_amount,
      email: input.email,
      owner_id: userId,
    })
    .select('id, amount, status, limit_amount, email, owner_id, created_at, updated_at')
    .single();
  if (error) throw error;
  const row = data as EntryRow;
  return { ...row, amount: Number(row.amount) } as Entry;
}

export async function updateEntry(
  id: string,
  patch: Partial<Pick<Entry, 'amount' | 'status' | 'limit_amount' | 'email'>>,
): Promise<Entry> {
  const { data, error } = await supabase
    .from('entries')
    .update(patch)
    .eq('id', id)
    .select('id, amount, status, limit_amount, email, owner_id, created_at, updated_at')
    .single();
  if (error) throw error;
  const row = data as EntryRow;
  return { ...row, amount: Number(row.amount) } as Entry;
}

export async function deleteEntry(id: string): Promise<void> {
  const { error } = await supabase.from('entries').delete().eq('id', id);
  if (error) throw error;
}
