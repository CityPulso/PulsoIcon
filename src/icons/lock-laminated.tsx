import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "lock-laminated" (MIT, Copyright (c) 2023 Phosphor Icons).
export const LockLaminated = createIcon("LockLaminated", "lock-laminated", {
  nodes: [
    ["rect", { x: "3", y: "10", width: "18", height: "12", rx: "2" }, { r: "shake", d: 0.1, a: 0.8, o: [12, 16] }],
    ["path", { d: "M3 14h18" }, { r: "shake", d: 0.1, a: 0.8, o: [12, 16] }],
    ["path", { d: "M3 18h18" }, { r: "shake", d: 0.1, a: 0.8, o: [12, 16] }],
    ["path", { d: "M7 10V7a5 5 0 0 1 10 0v3" }, { r: "lift", o: [12, 6] }],
  ],
});
