import { Handlers, PageProps } from "$fresh/server.ts";

import { ServerState } from "routes/_middleware.ts";
import { Layout } from "components/index.ts";
import AuthForm from "islands/AuthForm.tsx";

export const handler: Handlers = {
  GET(_req, ctx) {
    return ctx.render(ctx.state);
  },
};

export default function Page(props: PageProps<ServerState>) {
  return (
    <Layout state={props.data}>
      <div class="flex justify-center">
        <div class="flex flex-col items-stretch w-[500px] md:w-2/3">
          <div class="flex justify-center">
            <img
              src="/logo.svg"
              class="w-16 h-16 mt-8 mb-4"
              alt="the fresh logo: a sliced lemon dripping with juice"
            />
          </div>

          <AuthForm mode="In" />
        </div>
      </div>
    </Layout>
  );
}
