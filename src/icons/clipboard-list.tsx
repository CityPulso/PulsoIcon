import { createIcon } from "../runtime/createIcon.js";

export const ClipboardList = createIcon("ClipboardList", "clipboard-list", {
  nodes: [
    ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }, { r: "lift", o: [12, 4] }],
    ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }, { r: "press", a: 0.04, o: [12, 13] }],
    ["path", { d: "M12 11h4" }, { r: "growX", d: 0.15, o: [14, 11] }],
    ["path", { d: "M12 16h4" }, { r: "growX", d: 0.23, o: [14, 16] }],
    ["path", { d: "M8 11h.01" }, { r: "pop", d: 0.1, o: [8.005, 11] }],
    ["path", { d: "M8 16h.01" }, { r: "pop", d: 0.18, o: [8.005, 16] }],
  ],
});
