import { icon } from "../icon.js";

export const ClipboardCopy = icon("ClipboardCopy", "clipboard-copy", {
  nodes: [
    ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }, { r: "lift", o: [12, 4] }],
    ["path", { d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" }, { r: "press", a: 0.04, o: [12, 13] }],
    ["path", { d: "M16 4h2a2 2 0 0 1 2 2v4" }, { r: "fade", o: [18, 7] }],
    ["path", { d: "M21 14H11" }, { r: "bounce", d: 0.1, x: -1, a: 2, o: [16, 14] }],
    ["path", { d: "m15 10-4 4 4 4" }, { r: "bounce", d: 0.1, x: -1, a: 2, o: [16, 14] }],
  ],
});
