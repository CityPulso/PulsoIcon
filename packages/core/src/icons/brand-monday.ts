import { icon } from "../icon.js";

export const BrandMonday = icon("BrandMonday", "brand-monday", {
  nodes: [
    ["rect", { x: "4.25", y: "6.5", width: "3.5", height: "11", rx: "1.75", transform: "rotate(30 6 12)" }, { r: "bounce", y: -1, a: 1, o: [6, 12] }],
    ["rect", { x: "10.25", y: "6.5", width: "3.5", height: "11", rx: "1.75", transform: "rotate(30 12 12)" }, { r: "bounce", d: 0.1, y: -1, a: 1, o: [12, 12] }],
    ["circle", { cx: "18.5", cy: "15.5", r: "2" }, { r: "pop", d: 0.2, o: [18.5, 15.5] }],
  ],
});
