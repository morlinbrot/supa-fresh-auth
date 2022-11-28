import { Handlers } from "$fresh/server.ts";

import { supabase } from "lib/supabase.ts";

export const handler: Handlers = {
  async POST(req) {
    const form = await req.formData();
    const email = form.get("email");
    const password = form.get("password");

    const { data: { user, session }, error } = await supabase.auth.signUp({
      email: String(email),
      password: String(password),
    });

    if (error != null) {
      // TODO: Add some actual error handling.
      console.error(error);
      return new Response(null, { status: 500 });
    }

    if (user && !session) {
      // TODO: A user has been created but not yet confirmed their e-mail address.
      // We could add a flag for the frontend to remind the user.
    }

    const exists = await supabase.auth.getUser(String(user));
    if (exists?.data.user) {
      // TODO: Handle user already existing.
    }

    const headers = new Headers();
    headers.set("location", "/");

    return new Response(null, {
      status: 303,
      headers,
    });
  },
};
