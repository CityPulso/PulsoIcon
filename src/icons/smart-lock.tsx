import { createIcon } from "../runtime/createIcon.js";

export const SmartLock = createIcon("SmartLock", "smart-lock", {
  nodes: [
    ["rect", { x: "5", y: "2", width: "14", height: "20", rx: "3" }, { r: "press", a: 0.03, o: [12, 12] }],
    ["circle", { cx: "12", cy: "8", r: "2.5" }, { r: "pulse", a: 0.15, o: [12, 8] }],
    ["path", { d: "M9 14.5h.01" }, { r: "pop", d: 0.1, o: [9, 14.5] }],
    ["path", { d: "M12 14.5h.01" }, { r: "pop", d: 0.15, o: [12, 14.5] }],
    ["path", { d: "M15 14.5h.01" }, { r: "pop", d: 0.2, o: [15, 14.5] }],
    ["path", { d: "M9 18h.01" }, { r: "pop", d: 0.25, o: [9, 18] }],
    ["path", { d: "M12 18h.01" }, { r: "pop", d: 0.3, o: [12, 18] }],
    ["path", { d: "M15 18h.01" }, { r: "pop", d: 0.35, o: [15, 18] }],
  ],
});
