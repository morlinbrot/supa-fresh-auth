import { Handlers, PageProps } from "$fresh/server.ts";

import { ServerState } from "routes/_middleware.ts";
import { Layout, Link } from "components/index.ts";

export const handler: Handlers = {
  GET(_req, ctx) {
    return ctx.render(ctx.state);
  },
};

export default function Home(props: PageProps<ServerState>) {
  const isAllowed = !!props.data.user;
  return (
    <Layout state={props.data}>
      <img
        src="/logo.svg"
        class="w-32 h-32"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />

      <h2>Supa Fresh Auth</h2>

      <p>
        An example app built with Deno's{" "}
        <Link href="https://fresh.deno.dev/" target="_blank">Fresh</Link>{" "}
        framework, using{" "}
        <Link href="https://supabase.com/" target="_blank">
          Supabase
        </Link>{" "}
        and <Link href="https://redis.io/" target="_blank">Redis</Link>{" "}
        to implement a simple cookie-based authentication scheme.
      </p>

      <div class="my-4">
        <a
          href="https://fresh.deno.dev"
          target="_blank"
          style={{ display: "block", width: "fit-content" }}
        >
          <img
            width="197"
            height="37"
            src="https://fresh.deno.dev/fresh-badge.svg"
            alt="Made with Fresh"
          />
        </a>
      </div>

      {!isAllowed
        ? <Link href="/sign-in">Sign In</Link>
        : <Link href="/api/sign-out">Sign Out</Link>}
    </Layout>
  );
}
