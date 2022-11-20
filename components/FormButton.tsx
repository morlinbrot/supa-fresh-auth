import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function FormButton(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class={`flex-grow inline-block cursor-pointer px-4 py-2 rounded border(gray-500 2) disabled:(opacity-50 cursor-not-allowed) bg-primary border-primary text-white hover:bg-primaryStrong hover:border-primaryStrong ${
        props.class ?? ""
      }`}
    />
  );
}
