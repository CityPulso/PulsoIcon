import { icon } from "../icon.js";

export const QrCode = icon("QrCode", "qr-code", {
  nodes: [
    ["rect", { width: "5", height: "5", x: "3", y: "3", rx: "1" }, { r: "stamp", a: 0.3, o: [5.5, 5.5] }],
    ["rect", { width: "5", height: "5", x: "16", y: "3", rx: "1" }, { r: "stamp", d: 0.06, a: 0.3, o: [18.5, 5.5] }],
    ["rect", { width: "5", height: "5", x: "3", y: "16", rx: "1" }, { r: "stamp", d: 0.12, a: 0.3, o: [5.5, 18.5] }],
    ["path", { d: "M21 16h-3a2 2 0 0 0-2 2v3" }, { r: "draw", d: 0.18, o: [14, 14] }],
    ["path", { d: "M21 21v.01" }, { r: "pop", d: 0.43, o: [21, 21.005] }],
    ["path", { d: "M12 7v3a2 2 0 0 1-2 2H7" }, { r: "draw", d: 0.24, o: [14, 14] }],
    ["path", { d: "M3 12h.01" }, { r: "pop", d: 0.28, o: [3.005, 12] }],
    ["path", { d: "M12 3h.01" }, { r: "pop", d: 0.25, o: [12.005, 3] }],
    ["path", { d: "M12 16v.01" }, { r: "pop", d: 0.34, o: [12, 16.005] }],
    ["path", { d: "M16 12h1" }, { r: "pop", d: 0.31, o: [16.5, 12] }],
    ["path", { d: "M21 12v.01" }, { r: "pop", d: 0.37, o: [21, 12.005] }],
    ["path", { d: "M12 21v-1" }, { r: "pop", d: 0.4, o: [12, 20.5] }],
  ],
});
