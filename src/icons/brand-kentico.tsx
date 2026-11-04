import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "kentico" (CC0-1.0). Kentico is a trademark of its owner.
export const BrandKentico = createIcon("BrandKentico", "brand-kentico", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "4" }],
    ["circle", { cx: "12", cy: "12", r: "1.5" }, { r: "pop", d: 0.25, o: [12, 12] }],
    ["path", { d: "M12 8.25L12 6" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M14.65 9.35L16.24 7.76" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M15.75 12L18 12" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M14.65 14.65L16.24 16.24" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M12 15.75L12 18" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M9.35 14.65L7.76 16.24" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M8.25 12L6 12" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M9.35 9.35L7.76 7.76" }, { r: "spin", a: 90, o: [12, 12] }],
  ],
});
