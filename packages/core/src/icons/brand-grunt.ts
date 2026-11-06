import { icon } from "../icon.js";

// Drawn after Simple Icons "grunt" (CC0-1.0). Grunt is a trademark of its owner.

export const BrandGrunt = icon("BrandGrunt", "brand-grunt", {
  nodes: [
    ["path", { d: "M5 3.5l3.5 4.5h7L19 3.5" }, { r: "press", a: 0.05, o: [12, 20] }],
    ["path", { d: "M5 3.5c-1.2 4-1 8 1 11 1.5 2.2 3.5 3.6 6 4.8 2.5-1.2 4.5-2.6 6-4.8 2-3 2.2-7 1-11" }, { r: "press", a: 0.05, o: [12, 20] }],
    ["path", { d: "M9.5 11h.01M14.5 11h.01" }, { r: "blink", d: 0.2, o: [12, 11] }],
    ["ellipse", { cx: "12", cy: "15.25", rx: "3", ry: "2" }, { r: "press", a: 0.15, d: 0.1, o: [12, 15.25] }],
    ["path", { d: "M11 15.25h.01M13 15.25h.01" }, { r: "press", a: 0.15, d: 0.1, o: [12, 15.25] }],
    ["path", { d: "M8.5 15.5c-1.5-.3-2.3-1.6-2.3-3.3M15.5 15.5c1.5-.3 2.3-1.6 2.3-3.3" }, { r: "shake", d: 0.15, o: [12, 14] }],
  ],
});
