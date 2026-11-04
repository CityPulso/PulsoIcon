import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "customink" (CC0-1.0). Custom Ink is a trademark of its owner.
export const BrandCustomInk = createIcon("BrandCustomInk", "brand-custom-ink", {
  nodes: [
    ["path", { d: "M3 11a9 9 0 0 1 18 0" }, { r: "draw" }],
    ["path", { d: "M7.5 13.5a4.5 4.5 0 0 1 9 0z" }, { r: "float", a: 1, o: [12, 11] }],
    ["path", { d: "M10.5 11.5h.01M13.5 11.5h.01" }, { r: "blink", d: 0.2, o: [12, 11.5] }],
    ["circle", { cx: "4", cy: "16", r: "1.25" }, { r: "sway", d: 0, a: 12, o: [7, 13] }],
    ["circle", { cx: "7.75", cy: "19.25", r: "1.25" }, { r: "sway", d: 0.05, a: 10, o: [9, 14] }],
    ["circle", { cx: "12", cy: "20.5", r: "1.25" }, { r: "sway", d: 0.1, a: 8, o: [12, 14] }],
    ["circle", { cx: "16.25", cy: "19.25", r: "1.25" }, { r: "sway", d: 0.15, a: 10, o: [15, 14] }],
    ["circle", { cx: "20", cy: "16", r: "1.25" }, { r: "sway", d: 0.2, a: 12, o: [17, 13] }],
  ],
});
