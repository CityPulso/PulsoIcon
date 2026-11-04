import { createIcon } from "../runtime/createIcon.js";

export const SaveAll = createIcon("SaveAll", "save-all", {
  nodes: [
    ["path", { d: "M10 2v3a1 1 0 0 0 1 1h5" }, { r: "slide", d: 0.12, y: 1, a: 1, o: [13, 4] }],
    ["path", { d: "M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6" }, { r: "fade", d: 0.15, o: [14, 14.5] }],
    ["path", { d: "M18 22H4a2 2 0 0 1-2-2V6" }, { r: "press", d: 0.06, a: 0.04, o: [10, 14] }],
    ["path", { d: "M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z" }, { r: "press", a: 0.04, o: [14, 10] }],
  ],
});
