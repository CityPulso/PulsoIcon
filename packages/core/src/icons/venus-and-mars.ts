import { icon } from "../icon.js";

export const VenusAndMars = icon("VenusAndMars", "venus-and-mars", {
  nodes: [
    ["path", { d: "M10 20h4" }, { r: "bounce", d: 0.05, y: 1, a: 1.5, o: [12, 19] }],
    ["path", { d: "M12 16v6" }, { r: "bounce", d: 0.05, y: 1, a: 1.5, o: [12, 19] }],
    ["path", { d: "M17 2h4v4" }, { r: "slide", d: 0.05, x: 1, y: -1, a: 1.5, o: [18.27, 4.73] }],
    ["path", { d: "m21 2-5.46 5.46" }, { r: "slide", d: 0.05, x: 1, y: -1, a: 1.5, o: [18.27, 4.73] }],
    ["circle", { cx: "12", cy: "11", r: "5" }, { r: "press", a: 0.06, o: [12, 11] }],
  ],
});
