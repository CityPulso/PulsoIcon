import { icon } from "../icon.js";

export const Diff = icon("Diff", "diff", {
  nodes: [
    ["path", { d: "M12 3v14" }, { r: "grow", d: 0.05, o: [12, 10] }],
    ["path", { d: "M5 10h14" }, { r: "spin", a: 90, o: [12, 10] }],
    ["path", { d: "M5 21h14" }, { r: "growX", d: 0.15, o: [12, 21] }],
  ],
});
