import { Handlers } from "$fresh/server.ts";
import { deleteCookie } from "std/http/cookie.ts";

export const handler: Handlers = {
  GET(req) {
    const url = new URL(req.url);
    const headers = new Headers(req.headers);

    deleteCookie(headers, "auth", { path: "/", domain: url.hostname });

    headers.set("location", "/");

    return new Response(null, {
      status: 302,
      headers,
    });
  },
};