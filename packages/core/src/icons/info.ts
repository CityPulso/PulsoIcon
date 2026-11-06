import { icon } from "../icon.js";

export const Info = icon("Info", "info", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M12 16v-4" }, { r: "grow", d: 0.15, o: [12, 16] }],
    ["path", { d: "M12 8h.01" }, { r: "drop", d: 0.05, o: [12.005, 8] }],
  ],
});
