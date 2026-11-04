import { createIcon } from "../runtime/createIcon.js";

export const FingerprintScan = createIcon("FingerprintScan", "fingerprint-scan", {
  nodes: [
    ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }, { r: "press", a: 0.06, o: [12, 12] }],
    ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }, { r: "press", a: 0.06, o: [12, 12] }],
    ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }, { r: "press", a: 0.06, o: [12, 12] }],
    ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }, { r: "press", a: 0.06, o: [12, 12] }],
    ["path", { d: "M8 16v-4a4 4 0 0 1 7.5-1.94" }, { r: "draw", d: 0.05, o: [12, 12] }],
    ["path", { d: "M12 12v5" }, { r: "draw", d: 0.12, o: [12, 12] }],
    ["path", { d: "M16 13v3" }, { r: "draw", d: 0.19, o: [12, 12] }],
  ],
});
