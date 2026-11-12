import type { IconData } from "pulsoicon-core";
import type { IconProps } from "./types";

import { frameMarkup, iconFrame } from "pulsoicon-core";

let nextId = 0;

const kebab = (name: string) => (name.startsWith("--") ? name : name.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`));

function styleText(style: unknown): string | undefined {
  if (style === undefined || style === null || style === "") return undefined;
  if (typeof style !== "object") return String(style);
  return Object.entries(style as Record<string, unknown>)
    .filter(([, v]) => v !== undefined && v !== null)
    .map(([k, v]) => `${kebab(k)}:${v}`)
    .join(";");
}

/**
 * The icon's resting <svg>, exactly as the React package renders it, plus the `data-pulsoicon*` attributes the client
 * player (`client.ts`) reads to animate it.
 */
export function iconMarkup(data: IconData, props: IconProps): string {
  const { size = 24, color = "currentColor", strokeWidth = 2, absoluteStrokeWidth = false, solid = false, animated = true, autoAnimated = true, class: className, style, ...rest } = props;
  const frame = iconFrame(data, {
    size,
    color,
    strokeWidth,
    absoluteStrokeWidth,
    solid,
    className: typeof className === "string" && className ? className : undefined,
    maskId: `pulsoicon-a${nextId++}`,
  });
  const extraStyle = styleText(style);
  if (extraStyle) frame.attrs.style = `${frame.attrs.style};${extraStyle}`;
  const lead: Record<string, string> = { "aria-hidden": "true" };
  for (const [k, v] of Object.entries(rest)) {
    if (v === undefined || v === null || v === false) continue;
    lead[k] = v === true ? "" : String(v);
  }
  lead["data-pulsoicon"] = data.key;
  if (solid) lead["data-pulsoicon-solid"] = "";
  if (!animated) lead["data-pulsoicon-animated"] = "false";
  if (!autoAnimated) lead["data-pulsoicon-auto"] = "false";
  return frameMarkup(frame, lead);
}
