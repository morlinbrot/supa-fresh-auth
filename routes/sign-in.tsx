import { Handlers, PageProps } from "$fresh/server.ts";
import { getCookies } from "std/http/cookie.ts";

import { Layout } from "components/index.ts";
import AuthForm from "islands/AuthForm.tsx";

export type Data = {
  isAllowed: boolean;
};

export const handler: Handlers = {
  GET(req, ctx) {
    const cookies = getCookies(req.headers);
    return ctx.render({ isAllowed: cookies.auth == "superzitrone" });
  }
}

export default function Page({ data: { isAllowed }}: PageProps<Data>) {
  return (
    <Layout isAllowed={isAllowed}>
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
