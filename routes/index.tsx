import { Handlers, PageProps } from "$fresh/server.ts";
import { getCookies } from "std/http/cookie.ts";

import { Layout, Link } from "components/index.ts";

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

      {!isAllowed ? <Link href="/sign-in">Sign In</Link> : <Link href="/api/sign-out">Sign Out</Link>}

    </Layout>
  );
}
