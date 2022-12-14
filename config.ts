import { config } from "std/dotenv/mod.ts";

await config({ safe: true, export: true });

export const DENO_ENV = Deno.env.get("DENO_ENV") || "";

if (DENO_ENV == "dev" || DENO_ENV == "development") {
  console.log("Running with DENO_ENV=dev");
}

export const SUPABASE_URL = Deno.env.get("SUPABASE_URL") || "";
export const SUPABASE_KEY = Deno.env.get("SUPABASE_KEY") || "";
export const REDIS_HOST = Deno.env.get("REDIS_HOST") || "";
export const REDIS_PORT = Deno.env.get("REDIS_PORT") || "";
export const REDIS_PASS = Deno.env.get("REDIS_PASS") || "";
