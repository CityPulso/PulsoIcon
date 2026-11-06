import { icon } from "../icon.js";

export const ShippingFast = icon("ShippingFast", "shipping-fast", {
  nodes: [
    ["path", { d: "M15 18V7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h1" }, { r: "slide", x: 1, a: 1, o: [14, 12] }],
    ["path", { d: "M17 18h-4" }, { r: "slide", x: 1, a: 1, o: [14, 12] }],
    ["path", { d: "M21 18a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-2.48-3.1A1 1 0 0 0 18.52 9H15" }, { r: "slide", x: 1, a: 1, o: [14, 12] }],
    ["circle", { cx: "19", cy: "18", r: "2" }, { r: "spin", a: 360, o: [19, 18] }],
    ["circle", { cx: "11", cy: "18", r: "2" }, { r: "spin", a: 360, o: [11, 18] }],
    ["path", { d: "M2 9h3" }, { r: "shoot", x: -1, a: 2, o: [3.5, 9] }],
    ["path", { d: "M3 13h2" }, { r: "shoot", d: 0.1, x: -1, a: 2, o: [4, 13] }],
  ],
});
