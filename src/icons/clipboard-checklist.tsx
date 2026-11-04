import { createIcon } from "../runtime/createIcon.js";

export const ClipboardChecklist = createIcon("ClipboardChecklist", "clipboard-checklist", {
  nodes: [
    ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }, { r: "lift", o: [12, 4] }],
    ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }, { r: "press", a: 0.04, o: [12, 13] }],
    ["path", { d: "m7.5 11 1 1 2-2" }, { r: "draw", d: 0.1, o: [9, 11] }],
    ["path", { d: "M13 11h3" }, { r: "growX", d: 0.15, o: [13, 11] }],
    ["path", { d: "m7.5 16 1 1 2-2" }, { r: "draw", d: 0.25, o: [9, 16] }],
    ["path", { d: "M13 16h3" }, { r: "growX", d: 0.3, o: [13, 16] }],
  ],
});
