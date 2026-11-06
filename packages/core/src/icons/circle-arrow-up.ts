import { icon } from "../icon.js";

export const CircleArrowUp = icon("CircleArrowUp", "circle-arrow-up", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "m16 12-4-4-4 4" }, { r: "bounce", d: 0.1, y: -1, a: 2, o: [12, 12] }],
    ["path", { d: "M12 16V8" }, { r: "bounce", d: 0.1, y: -1, a: 2, o: [12, 12] }],
  ],
});
