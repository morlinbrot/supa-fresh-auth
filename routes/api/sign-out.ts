import { Handlers } from "$fresh/server.ts";
import { deleteCookie, getCookies } from "std/http/cookie.ts";

import { ACCESS_TOKEN } from "lib/config.ts";
import { redis } from "lib/redis.ts";

export const handler: Handlers = {
  async GET(req) {
    const url = new URL(req.url);
    const headers = new Headers(req.headers);

    const cookies = getCookies(req.headers);
    const access_token = cookies[ACCESS_TOKEN];

    if (access_token) {
      await redis.del(access_token);
    }

    deleteCookie(headers, ACCESS_TOKEN, { path: "/", domain: url.hostname });

    headers.set("location", "/");

    return new Response(null, {
      status: 302,
      headers,
    });
  },
};
