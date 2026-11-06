import { icon } from "../icon.js";

export const CheckLine = icon("CheckLine", "check-line", {
  nodes: [
    ["path", { d: "M20 4L9 15" }, { r: "draw", o: [12, 9.5] }],
    ["path", { d: "M21 19L3 19" }, { r: "growX", d: 0.2, o: [12, 19] }],
    ["path", { d: "M9 15L4 10" }, { r: "draw", o: [12, 9.5] }],
  ],
});
