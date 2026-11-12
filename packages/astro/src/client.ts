import type { IconData } from "pulsoicon-core";
import type { IconHandle, IconPlayer } from "pulsoicon-core/dom";

import { iconFrame } from "pulsoicon-core";
import { playIcon } from "pulsoicon-core/dom";

const icons = new Map<string, IconData>();
const players = new WeakMap<Element, IconPlayer>();

/** Starts the player of every server-rendered icon under `root` whose data has been registered and that has none yet. */
function bind(root: ParentNode, selector = "svg[data-pulsoicon]"): void {
  for (const svg of root.querySelectorAll<SVGSVGElement>(selector)) {
    if (players.has(svg)) continue;
    const data = icons.get(svg.dataset.pulsoicon ?? "");
    if (!data) continue;
    // Only the element tree and the motions matter to the player; the drawing itself is already on the page.
    const frame = iconFrame(data, { solid: svg.dataset.pulsoiconSolid !== undefined, maskId: "" });
    players.set(svg, playIcon(svg, frame, { animated: svg.dataset.pulsoiconAnimated !== "false", autoAnimated: svg.dataset.pulsoiconAuto !== "false" }));
  }
}

/** Called by each icon component's script with its data. */
export function register(data: IconData): void {
  icons.set(data.key, data);
  if (typeof document !== "undefined") bind(document, `svg[data-pulsoicon="${data.key}"]`);
}

/** The `startAnimation` / `stopAnimation` of a rendered icon's <svg> (undefined before its script has run). */
export function getIconHandle(svg: Element): IconHandle | undefined {
  return players.get(svg);
}

// View transitions swap the page without reloading the scripts.
if (typeof document !== "undefined") document.addEventListener("astro:page-load", () => bind(document));
