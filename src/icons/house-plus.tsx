import { createIcon } from "../runtime/createIcon.js";

export const HousePlus = createIcon("HousePlus", "house-plus", {
  nodes: [
    ["path", { d: "M12.35 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .71-1.53l7-6a2 2 0 0 1 2.58 0l7 6A2 2 0 0 1 21 10v2.35" }, { r: "press", a: 0.04, o: [12, 21] }],
    ["path", { d: "M14.8 12.4A1 1 0 0 0 14 12h-4a1 1 0 0 0-1 1v8" }, { r: "press", a: 0.04, o: [12, 21] }],
    ["path", { d: "M15 18h6" }, { r: "spin", d: 0.1, a: 90, o: [18, 18] }],
    ["path", { d: "M18 15v6" }, { r: "spin", d: 0.1, a: 90, o: [18, 18] }],
  ],
});
