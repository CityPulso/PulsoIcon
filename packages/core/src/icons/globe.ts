import { icon } from "../icon.js";

export const Globe = icon("Globe", "globe", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M2 12h20" }, { r: "growX", d: 0.1, o: [12, 12] }],
  ],
});
