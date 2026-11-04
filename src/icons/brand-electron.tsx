import { createIcon } from "../runtime/createIcon.js";

export const BrandElectron = createIcon("BrandElectron", "brand-electron", {
  svg: { r: "spin", a: 180 },
  nodes: [
    ["ellipse", { cx: "12", cy: "12", rx: "8.5", ry: "3.5", transform: "rotate(30 12 12)" }],
    ["ellipse", { cx: "12", cy: "12", rx: "8.5", ry: "3.5", transform: "rotate(90 12 12)" }],
    ["ellipse", { cx: "12", cy: "12", rx: "8.5", ry: "3.5", transform: "rotate(150 12 12)" }],
    ["circle", { cx: "12", cy: "12", r: "1" }],
    ["circle", { cx: "12", cy: "3.5", r: "1" }],
    ["circle", { cx: "19.36", cy: "16.25", r: "1" }],
    ["circle", { cx: "4.64", cy: "16.25", r: "1" }],
  ],
});
