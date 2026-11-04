import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "botblecms" (CC0-1.0). Botble CMS is a trademark of its owner.
export const BrandBotbleCms = createIcon("BrandBotbleCms", "brand-botble-cms", {
  nodes: [
    ["path", { d: "M7 3.5V16" }, { r: "draw" }],
    ["circle", { cx: "12", cy: "16", r: "5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M13.5 16a1.5 1.5 0 1 0-3 0a1.5 1.5 0 1 0 3 0v3" }, { r: "pop", d: 0.3, o: [12, 16] }],
  ],
});
