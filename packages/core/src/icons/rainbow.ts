import { icon } from "../icon.js";

export const Rainbow = icon("Rainbow", "rainbow", {
  nodes: [
    ["path", { d: "M22 17a10 10 0 0 0-20 0" }, { r: "draw", o: [12, 12] }],
    ["path", { d: "M6 17a6 6 0 0 1 12 0" }, { r: "draw", d: 0.1, o: [12, 14] }],
    ["path", { d: "M10 17a2 2 0 0 1 4 0" }, { r: "draw", d: 0.2, o: [12, 16] }],
  ],
});
