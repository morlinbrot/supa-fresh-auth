import { JSX } from "preact";
import { Button } from "components/index.ts";

export function NavButton(props: JSX.HTMLAttributes<HTMLAnchorElement>) {
  return (
    <Button
      {...props}
      class="rounded !border(white 2) text-white hover:bg-primaryLight !hover:border-primaryLight"
    />
  );
}
