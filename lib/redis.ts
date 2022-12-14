import { connect } from "redis";

import * as cfg from "../config.ts";

const isDev = cfg.DENO_ENV == "dev" || cfg.DENO_ENV == "development";

export const redis = await connect({
  hostname: cfg.REDIS_HOST,
  port: cfg.REDIS_PORT,
  password: isDev ? undefined : cfg.REDIS_PASS,
});
