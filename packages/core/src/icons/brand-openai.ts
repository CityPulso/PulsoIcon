import { icon } from "../icon.js";

export const BrandOpenai = icon("BrandOpenai", "brand-openai", {
  svg: { r: "spin", a: 120 },
  nodes: [
    ["ellipse", { cx: "12", cy: "12", rx: "3.5", ry: "8.5" }],
    ["ellipse", { cx: "12", cy: "12", rx: "3.5", ry: "8.5", transform: "rotate(60 12 12)" }],
    ["ellipse", { cx: "12", cy: "12", rx: "3.5", ry: "8.5", transform: "rotate(120 12 12)" }],
  ],
});
