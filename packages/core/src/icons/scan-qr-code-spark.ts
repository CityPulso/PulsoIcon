import { icon } from "../icon.js";

export const ScanQrCodeSpark = icon("ScanQrCodeSpark", "scan-qr-code-spark", {
  nodes: [
    ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }, { r: "pulse", a: 0.08, o: [12, 12] }],
    ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }, { r: "pulse", a: 0.08, o: [12, 12] }],
    ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }, { r: "pulse", a: 0.08, o: [12, 12] }],
    ["rect", { x: "7", y: "7", width: "5", height: "5", rx: "1" }, { r: "stamp", d: 0.05, a: 0.3, o: [9.5, 9.5] }],
    ["path", { d: "M16 7v1" }, { r: "pop", d: 0.2, o: [16, 7.5] }],
    ["path", { d: "M7 16h.01" }, { r: "pop", d: 0.25, o: [7, 16] }],
    ["path", { d: "M18 22a4.5 4.5 0 0 1 3.5-3.5 4.5 4.5 0 0 1-3.5-3.5 4.5 4.5 0 0 1-3.5 3.5 4.5 4.5 0 0 1 3.5 3.5" }, { r: "twinkle", d: 0.3, o: [18, 18.5] }],
  ],
});
