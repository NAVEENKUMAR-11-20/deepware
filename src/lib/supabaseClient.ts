import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Log to verify values are loading in development
if (import.meta.env.DEV) {
  console.log('Supabase URL:', supabaseUrl);
  console.log('Supabase Key:', supabaseKey);
}

// Only initialize if we have the required parameters to avoid crashing the app
// Supabase requires a valid URL (starts with https://)
export const supabase = (supabaseUrl && supabaseKey && supabaseUrl.startsWith('https://')) 
  ? createClient(supabaseUrl, supabaseKey) 
  : null;
