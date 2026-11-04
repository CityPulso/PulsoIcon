import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "ratatui" (CC0-1.0). Ratatui is a trademark of its owner.
export const BrandRatatui = createIcon("BrandRatatui", "brand-ratatui", {
  nodes: [
    ["path", { d: "M3.5 17c0-4 3-7.5 7.5-7.5 3.5 0 6 2 7.5 4.5l3 1.5-3 1c-1 .5-2 .5-3 .5z" }, { r: "bounce", y: -1, a: 1, o: [12, 17] }],
    ["circle", { cx: "13.5", cy: "8.5", r: "2" }, { r: "bounce", y: -1, a: 1, o: [12, 17] }],
    ["path", { d: "M16.5 13.5h.01" }, { r: "bounce", y: -1, a: 1, o: [12, 17] }],
    ["path", { d: "M3.5 17c-1.5 1.5-.5 3.5 2 3.5H12" }, { r: "swing", a: 10, o: [3.5, 17] }],
  ],
});
