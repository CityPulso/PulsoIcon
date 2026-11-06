import { icon } from "../icon.js";

export const ClipboardSearch = icon("ClipboardSearch", "clipboard-search", {
  nodes: [
    ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }, { r: "lift", o: [12, 4] }],
    ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }, { r: "press", d: 0.05, a: 0.04, o: [12, 22] }],
    ["circle", { cx: "11.5", cy: "13.5", r: "2.5" }, { r: "wobble", d: 0.1, a: 10, o: [13, 15] }],
    ["path", { d: "m13.3 15.3 2.2 2.2" }, { r: "wobble", d: 0.1, a: 10, o: [13, 15] }],
  ],
});
