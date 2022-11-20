import { Layout } from "components/index.ts";

export default function Home() {
  return (
    <Layout isAllowed={false}>
      <img
        src="/logo.svg"
        class="w-32 h-32"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p class="my-6">
        Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
        file, and refresh.
      </p>
    </Layout>
  );
}
