import { createIcon } from "../runtime/createIcon.js";

export const ClipboardClock = createIcon("ClipboardClock", "clipboard-clock", {
  nodes: [
    ["path", { d: "M16 14v2.2l1.6 1" }, { r: "spin", d: 0.1, a: 360, o: [16, 16] }],
    ["path", { d: "M16 4h2a2 2 0 0 1 2 2v.832" }, { r: "press", a: 0.04, o: [12, 13] }],
    ["path", { d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2" }, { r: "press", a: 0.04, o: [12, 13] }],
    ["circle", { cx: "16", cy: "16", r: "6" }, { r: "pulse", d: 0.1, a: 0.05, o: [16, 16] }],
    ["rect", { x: "8", y: "2", width: "8", height: "4", rx: "1" }, { r: "lift", o: [12, 4] }],
  ],
});
