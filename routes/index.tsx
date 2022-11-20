import { Handlers, PageProps } from "$fresh/server.ts";
import { getCookies } from "std/http/cookie.ts";

import { Layout } from "components/index.ts";
import SignInForm from "islands/SignInForm.tsx";

export type Data = {
  isAllowed: boolean;
};

export const handler: Handlers = {
  GET(req, ctx) {
    const cookies = getCookies(req.headers);
    return ctx.render({ isAllowed: cookies.auth == "superzitrone" });
  }
}

export default function Home({ data: { isAllowed }}: PageProps<Data>) {
  return (
    <Layout isAllowed={isAllowed}>
      <img
        src="/logo.svg"
        class="w-32 h-32"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />

      <p class="my-6">
        You are currently {!isAllowed && "not"} signed in. 
      </p>

      {!isAllowed ? <SignInForm /> : <a href="/api/sign-out">Sign Out</a>}

    </Layout>
  );
}
