import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "network-x" (MIT, Copyright (c) 2023 Phosphor Icons).

export const NetworkX = createIcon("NetworkX", "network-x", {
  nodes: [
    ["rect", { x: "9", y: "2", width: "6", height: "6", rx: "1" }, { r: "pop", o: [12, 5] }],
    ["path", { d: "M12 12V8" }, { r: "grow", d: 0.1, o: [12, 8] }],
    ["path", { d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2" }, { r: "draw", d: 0.15, o: [12, 14] }],
    ["rect", { x: "2", y: "16", width: "6", height: "6", rx: "1" }, { r: "pop", d: 0.3, o: [5, 19] }],
    ["path", { d: "m17 17 4 4" }, { r: "shake", d: 0.35, o: [19, 19] }],
    ["path", { d: "m21 17-4 4" }, { r: "shake", d: 0.35, o: [19, 19] }],
  ],
});
