import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "vikunja" (CC0-1.0). Vikunja is a trademark of its owner.
export const BrandVikunja = createIcon("BrandVikunja", "brand-vikunja", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M9 21v-8.5c0-1 .4-2 1-2.6L9.5 5l2 3.5h1l2-3.5-.5 4.9c.6.6 1 1.6 1 2.6V21" }, { r: "tilt", a: 8, o: [12, 21] }],
    ["path", { d: "M10.8 12.5h.01M13.2 12.5h.01" }, { r: "blink", o: [12, 12.5], d: 0.2 }],
  ],
});
