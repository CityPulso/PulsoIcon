import { icon } from "../icon.js";

export const CopyOff = icon("CopyOff", "copy-off", {
  nodes: [
    ["path", { d: "M10 8h10a2 2 0 0 1 2 2v10" }, { r: "fade", o: [16, 14] }],
    ["path", { d: "M20.6 21.4A2 2 0 0 1 20 22H10a2 2 0 0 1-2-2V10a2 2 0 0 1 .6-1.4" }, { r: "fade", d: 0.05, o: [14, 15] }],
    ["path", { d: "M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 .6-1.4" }, { r: "fade", d: 0.1, o: [3, 9] }],
    ["path", { d: "M8 2h6a2 2 0 0 1 2 2" }, { r: "fade", d: 0.1, o: [12, 3] }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
});
