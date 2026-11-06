import { icon } from "../icon.js";

export const BrandAmazon = icon("BrandAmazon", "brand-amazon", {
  nodes: [
    ["circle", { cx: "11", cy: "9.5", r: "3" }, { r: "press", a: 0.06, o: [12, 9.5] }],
    ["path", { d: "M14 6.5v6" }, { r: "press", a: 0.06, o: [12, 9.5] }],
    ["path", { d: "M3.5 16c5 3.3 11.5 3.3 16 0" }, { r: "draw", d: 0.1, o: [11.75, 17] }],
    ["path", { d: "M17 15.2l3-.2.2 3" }, { r: "pop", d: 0.35, o: [19.5, 16] }],
  ],
});
