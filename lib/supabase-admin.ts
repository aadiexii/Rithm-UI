import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder-demo.supabase.co";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "placeholder-demo-service-role-key";

/**
 * Server-side Supabase client that bypasses RLS.
 * Use this in API routes, server components, and webhooks.
 */
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);
