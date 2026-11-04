import { createIcon } from "../runtime/createIcon.js";

export const NetworkAlert = createIcon("NetworkAlert", "network-alert", {
  nodes: [
    ["rect", { x: "9", y: "2", width: "6", height: "6", rx: "1" }, { r: "pop", o: [12, 5] }],
    ["rect", { x: "2", y: "16", width: "6", height: "6", rx: "1" }, { r: "pop", d: 0.2, o: [5, 19] }],
    ["path", { d: "M12 8v4" }, { r: "grow", d: 0.1, o: [12, 8] }],
    ["path", { d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1" }, { r: "draw", d: 0.15, o: [12, 14] }],
    ["path", { d: "M19 17v2" }, { r: "shake", d: 0.3, a: 1, o: [19, 19] }],
    ["path", { d: "M19 22h.01" }, { r: "pop", d: 0.4, o: [19, 22] }],
  ],
});
