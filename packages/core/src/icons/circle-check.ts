import { icon } from "../icon.js";

export const CircleCheck = icon("CircleCheck", "circle-check", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "m16 9-5.5 5.5L8 12" }, { r: "draw", d: 0.1, o: [12, 11.75] }],
  ],
});
