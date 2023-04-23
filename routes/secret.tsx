import { Handlers, PageProps } from "$fresh/server.ts";

import { ServerState } from "routes/_middleware.ts";
import { Layout } from "components/index.ts";

export const handler: Handlers = {
  GET(_req, ctx) {
    return ctx.render(ctx.state);
  },
};

export default function Secret(props: PageProps<ServerState>) {
  return (
    <Layout state={props.data}>
      <div class="flex flex-col items-center">
        <h2>Congrats, You've reached the secret page!</h2>
        <p>Here's a little treat:</p>
        <p class="text-[72px] text-align-center">🍋</p>
      </div>
    </Layout>
  );
}
