import { createIcon } from "../runtime/createIcon.js";

export const Barcode = createIcon("Barcode", "barcode", {
  nodes: [
    ["path", { d: "M3 5v14" }, { r: "grow", o: [3, 12] }],
    ["path", { d: "M8 5v14" }, { r: "grow", d: 0.06, o: [8, 12] }],
    ["path", { d: "M12 5v14" }, { r: "grow", d: 0.12, o: [12, 12] }],
    ["path", { d: "M17 5v14" }, { r: "grow", d: 0.18, o: [17, 12] }],
    ["path", { d: "M21 5v14" }, { r: "grow", d: 0.24, o: [21, 12] }],
  ],
});
