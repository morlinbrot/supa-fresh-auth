import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function Input(props: JSX.HTMLAttributes<HTMLInputElement>) {
  const name = props.name || "";
  const displayName = name.charAt(0).toLocaleUpperCase() + name.slice(1);

  return (
    <label for={props.name} class="flex flex-col flex-grow font-bold mb-1">
      {displayName}
      <input
        {...props}
        disabled={!IS_BROWSER || props.disabled}
        class={`px-3 py-2 bg-white rounded border(gray-500 2) disabled:(opacity-50 cursor-not-allowed) ${
          props.class ?? ""
        }`}
      />
    </label>
  );
}
