import { icon } from "../icon.js";

export const CirclePlus = icon("CirclePlus", "circle-plus", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M8 12h8" }, { r: "spin", d: 0.1, a: 90, o: [12, 12] }],
    ["path", { d: "M12 8v8" }, { r: "spin", d: 0.1, a: 90, o: [12, 12] }],
  ],
});
