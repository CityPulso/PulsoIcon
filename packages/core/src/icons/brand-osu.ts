import { icon } from "../icon.js";

// Drawn after Simple Icons "osu" (CC0-1.0). osu! is a trademark of its owner.
export const BrandOsu = icon("BrandOsu", "brand-osu", {
  nodes: [
    ["circle", { cx: "4.5", cy: "12.5", r: "2.5" }, { r: "draw", o: [4.5, 12.5] }],
    ["path", { d: "M12.2 10.6A2 1.6 0 0 0 10.2 9.5c-1.1 0-2 .6-2 1.5 0 2 4.2 1 4.2 3 0 .9-.9 1.5-2.1 1.5-1 0-1.8-.4-2.2-1.1" }, { r: "draw", d: 0.12, o: [10.2, 12.5] }],
    ["path", { d: "M14.5 9.5v3.5a2 2 0 0 0 4 0V9.5" }, { r: "draw", d: 0.24, o: [16.5, 12.5] }],
    ["path", { d: "M20.75 7v5.5" }, { r: "draw", d: 0.36, o: [20.75, 10] }],
    ["path", { d: "M20.75 16h.01" }, { r: "pop", d: 0.48, o: [20.75, 16] }],
  ],
});
