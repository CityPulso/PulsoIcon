import { icon } from "../icon.js";

export const Keyframes = icon("Keyframes", "keyframes", {
  nodes: [
    ["path", { d: "M7 6l5 6-5 6-5-6z" }, { r: "spin", a: 90, o: [7, 12] }],
    ["path", { d: "M15 6l5 6-5 6" }, { r: "slide", d: 0.1, x: 1, a: 1.5, o: [17.5, 12] }],
    ["path", { d: "M19 6l3 6-3 6" }, { r: "slide", d: 0.18, x: 1, a: 1.5, o: [20.5, 12] }],
  ],
});
