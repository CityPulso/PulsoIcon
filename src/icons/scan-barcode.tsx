import { createIcon } from "../runtime/createIcon.js";

export const ScanBarcode = createIcon("ScanBarcode", "scan-barcode", {
  nodes: [
    ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }, { r: "pulse", a: 0.08, o: [12, 12] }],
    ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }, { r: "pulse", a: 0.08, o: [12, 12] }],
    ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }, { r: "pulse", a: 0.08, o: [12, 12] }],
    ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }, { r: "pulse", a: 0.08, o: [12, 12] }],
    ["path", { d: "M8 7v10" }, { r: "grow", d: 0.1, o: [8, 12] }],
    ["path", { d: "M12 7v10" }, { r: "grow", d: 0.16, o: [12, 12] }],
    ["path", { d: "M17 7v10" }, { r: "grow", d: 0.22, o: [17, 12] }],
  ],
});
