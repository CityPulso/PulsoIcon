import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "viaplay" (CC0-1.0). Viaplay is a trademark of its owner.
export const BrandViaplay = createIcon("BrandViaplay", "brand-viaplay", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M8 7l9.5 5L8 17l2.5-5Z" }, { r: "press", a: 0.15, o: [12, 12] }],
  ],
});
