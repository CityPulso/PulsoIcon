import { icon } from "../icon.js";

export const ClipboardX = icon("ClipboardX", "clipboard-x", {
  nodes: [
    ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }, { r: "lift", o: [12, 4] }],
    ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }, { r: "shake", a: 1, o: [12, 13] }],
    ["path", { d: "m14.5 11.5-5 5" }, { r: "draw", d: 0.15, o: [12, 14] }],
    ["path", { d: "m9.5 11.5 5 5" }, { r: "draw", d: 0.25, o: [12, 14] }],
  ],
});
