import { icon } from "../icon.js";

// Drawn after Simple Icons "neptune" (CC0-1.0). Neptune is a trademark of its owner.
export const BrandNeptune = icon("BrandNeptune", "brand-neptune", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M6 12h.01" }, { r: "pop", o: [6, 12] }],
    ["path", { d: "M8.5 12c1.5 0 1-5 2.5-5s1 10 2.5 10 1-5 2.5-5h1" }, { r: "draw", d: 0.1 }],
  ],
});
