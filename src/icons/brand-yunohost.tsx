import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "yunohost" (CC0-1.0). YunoHost is a trademark of its owner.

export const BrandYunohost = createIcon("BrandYunohost", "brand-yunohost", {
  nodes: [
    ["path", { d: "M3 4l3 4.5L9 4M6 8.5V13" }, { r: "draw", o: [6, 8.5] }],
    ["path", { d: "M11.5 4v5a2.5 2.5 0 0 0 5 0V4" }, { r: "draw", d: 0.1, o: [14, 7] }],
    ["path", { d: "M5 15v5M10 15v5M5 17.5h5" }, { r: "draw", d: 0.2, o: [7.5, 17.5] }],
    ["circle", { cx: "17", cy: "17.5", r: "3" }, { r: "draw", d: 0.3, o: [17, 17.5] }],
  ],
});
