import { Handlers } from "$fresh/server.ts";
import { setCookie } from "std/http/cookie.ts";

export const handler: Handlers = {
  async POST(req) {
    const url = new URL(req.url);
    const form = await req.formData();
		
    const email = String(form.get("email"));
    const password = String(form.get("password"));

    if (email === "test@example.com" && password === "password1234") {
      const headers = new Headers();
      headers.set("location", "/");

      setCookie(headers, {
        name: "auth",
        value: "superzitrone",
        maxAge: 3600,
        sameSite: "Lax",
        domain: url.hostname,
        path: "/",
        secure: true,
      });

      return new Response(null, {
        status: 303,
        headers,
      });
    } else {
      return new Response(null, {
        status: 403,
      });
    }
  },
};
