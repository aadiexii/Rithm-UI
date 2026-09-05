/* ─────────────────────────────────────────────────────────────
 *  Rithm Chat — Supabase Client (browser-side singleton)
 * ───────────────────────────────────────────────────────────── */

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder-demo.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-anon-key";

/**
 * Shared Supabase client instance.
 *
 * Uses the **anon** key only — never expose the service_role key
 * on the client side.  Realtime is enabled by default.
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
