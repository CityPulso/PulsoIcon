import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "cbs" (CC0-1.0). CBS is a trademark of its owner.
export const BrandCbs = createIcon("BrandCbs", "brand-cbs", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M2 12c2.5-4 6-6 10-6s7.5 2 10 6c-2.5 4-6 6-10 6s-7.5-2-10-6z" }, { r: "blink", o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "3" }, { r: "blink", o: [12, 12] }],
  ],
});
