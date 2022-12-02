import { connect } from "redis";

export const redis = await connect({
  hostname: "127.0.0.1",
  port: 6379,
});
