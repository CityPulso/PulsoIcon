import { icon } from "../icon.js";

export const ClipboardPen = icon("ClipboardPen", "clipboard-pen", {
  nodes: [
    ["path", { d: "M16 4h2a2 2 0 0 1 2 2v2" }, { r: "press", a: 0.04, o: [12, 13] }],
    [
      "path",
      { d: "M21.34 15.664a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" },
      { r: "tilt", d: 0.1, a: 14, o: [14, 20] },
    ],
    ["path", { d: "M8 22H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }, { r: "press", a: 0.04, o: [12, 13] }],
    ["rect", { x: "8", y: "2", width: "8", height: "4", rx: "1" }, { r: "lift", o: [12, 4] }],
  ],
});
