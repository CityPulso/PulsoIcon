import { icon } from "../icon.js";

// Drawn after Simple Icons "prezi" (CC0-1.0). Prezi is a trademark of its owner.
export const BrandPrezi = icon("BrandPrezi", "brand-prezi", {
  nodes: [
    [
      "path",
      {
        d: "M20.21 14.2L21.66 14.59M18.01 18.01L19.07 19.07M14.2 20.21L14.59 21.66M9.8 20.21L9.41 21.66M5.99 18.01L4.93 19.07M3.79 14.2L2.34 14.59M3.79 9.8L2.34 9.41M5.99 5.99L4.93 4.93M9.8 3.79L9.41 2.34M14.2 3.79L14.59 2.34M18.01 5.99L19.07 4.93M20.21 9.8L21.66 9.41",
      },
      { r: "spin", a: 30, o: [12, 12] },
    ],
    ["circle", { cx: "12", cy: "12", r: "5" }, { r: "pulse", d: 0.1, o: [12, 12] }],
    ["path", { d: "M10.5 9.5v5M13.5 9.5v5" }, { r: "blink", d: 0.2, o: [12, 12] }],
  ],
});
