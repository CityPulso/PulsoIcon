import { createIcon } from "../runtime/createIcon.js";

export const HardDriveDownload = createIcon("HardDriveDownload", "hard-drive-download", {
  nodes: [
    ["path", { d: "M12 2v8" }, { r: "bounce", y: 1, a: 2, o: [12, 6] }],
    ["path", { d: "m16 6-4 4-4-4" }, { r: "bounce", y: 1, a: 2, o: [12, 6] }],
    ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2" }, { r: "press", a: 0.04, o: [12, 18] }],
    ["path", { d: "M6 18h.01" }, { r: "flicker", d: 0.15, o: [8.005, 18] }],
    ["path", { d: "M10 18h.01" }, { r: "flicker", d: 0.21, o: [8.005, 18] }],
  ],
});
