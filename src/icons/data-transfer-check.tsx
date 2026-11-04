import { createIcon } from "../runtime/createIcon.js";

export const DataTransferCheck = createIcon("DataTransferCheck", "data-transfer-check", {
  nodes: [
    ["path", { d: "m3 16 4 4 4-4" }, { r: "slide", y: 1, a: 2, o: [7, 12] }],
    ["path", { d: "M7 20V4" }, { r: "slide", y: 1, a: 2, o: [7, 12] }],
    ["path", { d: "m21 8-4-4-4 4" }, { r: "slide", y: -1, a: 2, o: [17, 8] }],
    ["path", { d: "M17 4v9" }, { r: "slide", y: -1, a: 2, o: [17, 8] }],
    ["path", { d: "m14 19 2 2 5-5" }, { r: "draw", d: 0.25, o: [17.5, 18.5] }],
  ],
});
