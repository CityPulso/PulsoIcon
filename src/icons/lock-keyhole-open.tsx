import { createIcon } from "../runtime/createIcon.js";

export const LockKeyholeOpen = createIcon("LockKeyholeOpen", "lock-keyhole-open", {
  nodes: [
    ["circle", { cx: "12", cy: "16", r: "1" }, { r: "pop", d: 0.1, o: [12, 16] }],
    ["rect", { width: "18", height: "12", x: "3", y: "10", rx: "2" }, { r: "press", d: 0.05, a: 0.04, o: [12, 16] }],
    ["path", { d: "M7 10V7a5 5 0 0 1 9.33-2.5" }, { r: "swing", a: 12, o: [16, 10] }],
  ],
});
