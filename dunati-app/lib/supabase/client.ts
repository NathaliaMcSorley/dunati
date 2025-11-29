/**
 * Browser Supabase client factory
 *
 * Returns a Supabase client configured for client-side usage.
 * Uses only public (publishable/anon) keys and is safe to expose in the browser.
 */
import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
  );
}
