import { icon } from "../icon.js";

// Drawn after Phosphor Icons "lock-laminated-open" (MIT, Copyright (c) 2023 Phosphor Icons).
export const LockLaminatedOpen = icon("LockLaminatedOpen", "lock-laminated-open", {
  nodes: [
    ["rect", { x: "3", y: "10", width: "18", height: "12", rx: "2" }, { r: "press", d: 0.05, a: 0.04, o: [12, 16] }],
    ["path", { d: "M3 14h18" }, { r: "press", d: 0.05, a: 0.04, o: [12, 16] }],
    ["path", { d: "M3 18h18" }, { r: "press", d: 0.05, a: 0.04, o: [12, 16] }],
    ["path", { d: "M7 10V7a5 5 0 0 1 9.33-2.5" }, { r: "swing", a: 12, o: [16, 10] }],
  ],
});
