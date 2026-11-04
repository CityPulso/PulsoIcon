import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "boxysvg" (CC0-1.0). Boxy SVG is a trademark of its owner.
export const BrandBoxySvg = createIcon("BrandBoxySvg", "brand-boxy-svg", {
  nodes: [
    ["path", { d: "M12 2 L20.66 7 L20.66 17 L12 22 L3.34 17 L3.34 7z" }],
    ["circle", { cx: "12", cy: "12", r: "1.5" }, { r: "spin", a: 60, o: [12, 12] }],
    ["path", { d: "M15.5 12L18.5 12M13.75 15.03L15.25 17.63M10.25 15.03L8.75 17.63M8.5 12L5.5 12M10.25 8.97L8.75 6.37M13.75 8.97L15.25 6.37" }, { r: "spin", a: 60, o: [12, 12] }],
  ],
});
