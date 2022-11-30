import { Handlers, PageProps } from "$fresh/server.ts";

import { ServerState } from "routes/_middleware.ts";
import { Layout, Link } from "components/index.ts";

export const handler: Handlers = {
  GET(_req, ctx) {
    return ctx.render(ctx.state);
  }
}

export default function Home(props: PageProps<ServerState>) {
  const isAllowed = !!props.data.user;
  return (
    <Layout state={props.data}>
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
