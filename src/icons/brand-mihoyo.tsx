import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "mihoyo" (CC0-1.0). miHoYo is a trademark of its owner.
export const BrandMihoyo = createIcon("BrandMihoyo", "brand-mihoyo", {
  nodes: [
    ["path", { d: "M2 9v7M6.5 9v7M2 12.5h4.5" }, { r: "draw" }],
    ["circle", { cx: "10", cy: "14", r: "2" }, { r: "pop", d: 0.1, o: [10, 14] }],
    ["path", { d: "M13 9l2.25 3.5L17.5 9M15.25 12.5V16" }, { r: "draw", d: 0.2 }],
    ["circle", { cx: "20", cy: "14", r: "2" }, { r: "pop", d: 0.3, o: [20, 14] }],
    ["path", { d: "M9.25 9.5h.01M10.75 9.5h.01" }, { r: "pop", d: 0.4, o: [10, 9.5] }],
  ],
});
