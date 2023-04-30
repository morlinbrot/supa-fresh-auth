import { Handlers } from "$fresh/server.ts";
import { setCookie } from "std/http/cookie.ts";

import { ACCESS_TOKEN } from "lib/config.ts";
import { supabase } from "lib/supabase.ts";

export const handler: Handlers = {
  async POST(req) {
    const url = new URL(req.url);
    const form = await req.formData();

    const headers = new Headers();
    headers.set("location", "/");

    const email = String(form.get("email"));
    const password = String(form.get("password"));

    const { data: { user, session }, error } = await supabase.auth
      .signInWithPassword({
        email,
        password,
      });

    if (error != null || user == null || session == null) {
      // TODO: Add some actual error handling. Differentiate between 500 & 403.
      return new Response(null, { status: 500 });
    }

    setCookie(headers, {
      name: ACCESS_TOKEN,
      value: session.access_token,
      maxAge: session.expires_in,
      sameSite: "Lax",
      domain: url.hostname,
      path: "/",
      secure: true,
    });

    return new Response(null, {
      status: 303,
      headers,
    });
  },
};
