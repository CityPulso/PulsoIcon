import { createIcon } from "../runtime/createIcon.js";

export const BrandReact = createIcon("BrandReact", "brand-react", {
  svg: { r: "spin", a: 180 },
  nodes: [
    ["ellipse", { cx: "12", cy: "12", rx: "10", ry: "4" }],
    ["ellipse", { cx: "12", cy: "12", rx: "10", ry: "4", transform: "rotate(60 12 12)" }],
    ["ellipse", { cx: "12", cy: "12", rx: "10", ry: "4", transform: "rotate(120 12 12)" }],
    ["circle", { cx: "12", cy: "12", r: "1" }],
  ],
});
