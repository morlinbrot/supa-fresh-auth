import { createClient } from "supabase";

import * as cfg from "../config.ts";

export const supabase = createClient(cfg.SUPABASE_URL, cfg.SUPABASE_KEY);
