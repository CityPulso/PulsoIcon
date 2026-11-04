import { createIcon } from "../runtime/createIcon.js";

export const SmartphoneRestore = createIcon("SmartphoneRestore", "smartphone-restore", {
  nodes: [
    ["path", { d: "M12 21H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M10 18h.01" }, { r: "flicker", d: 0.1, o: [10, 18] }],
    ["path", { d: "M14 17a4 4 0 1 0 1.17-2.83L14 16" }, { r: "spin", d: 0.1, a: -360, o: [18, 17] }],
    ["path", { d: "M14 13v3h3" }, { r: "spin", d: 0.1, a: -360, o: [18, 17] }],
  ],
});
