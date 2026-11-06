import { icon } from "../icon.js";

export const Contrast = icon("Contrast", "contrast", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M12 18a6 6 0 0 0 0-12v12z" }, { r: "spin", d: 0.05, a: 180, o: [12, 12] }],
  ],
});
