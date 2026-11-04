import { createIcon } from "../runtime/createIcon.js";

export const ClipboardPenLine = createIcon("ClipboardPenLine", "clipboard-pen-line", {
  nodes: [
    ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1" }, { r: "lift", o: [12, 4] }],
    ["path", { d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5" }, { r: "press", a: 0.04, o: [12, 13] }],
    ["path", { d: "M16 4h2a2 2 0 0 1 1.73 1" }, { r: "press", a: 0.04, o: [12, 13] }],
    ["path", { d: "M8 18h1" }, { r: "press", a: 0.04, o: [12, 13] }],
    [
      "path",
      { d: "M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" },
      { r: "tilt", d: 0.1, a: 14, o: [14, 17] },
    ],
  ],
});
