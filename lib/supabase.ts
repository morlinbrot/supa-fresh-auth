import { createClient } from "supabase";
import { config } from "std/dotenv/mod.ts";

await config({ safe: true, export: true });

const SUPABASE_URL = Deno.env.get("SUPABASE_URL") || "";
const SUPABASE_KEY = Deno.env.get("SUPABASE_KEY") || "";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
