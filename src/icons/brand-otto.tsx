import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "otto" (CC0-1.0). Otto is a trademark of its owner.
export const BrandOtto = createIcon("BrandOtto", "brand-otto", {
  nodes: [
    ["ellipse", { cx: "4", cy: "12", rx: "2.25", ry: "3.5" }, { r: "draw", o: [4, 12] }],
    ["path", { d: "M7.5 8.5h4M9.5 8.5v7" }, { r: "draw", d: 0.12, o: [9.5, 12] }],
    ["path", { d: "M12.5 8.5h4M14.5 8.5v7" }, { r: "draw", d: 0.24, o: [14.5, 12] }],
    ["ellipse", { cx: "19.75", cy: "12", rx: "2.25", ry: "3.5" }, { r: "draw", d: 0.36, o: [19.75, 12] }],
  ],
});
