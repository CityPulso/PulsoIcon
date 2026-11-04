import { createIcon } from "../runtime/createIcon.js";

export const HouseX = createIcon("HouseX", "house-x", {
  nodes: [
    ["path", { d: "M12.35 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .71-1.53l7-6a2 2 0 0 1 2.58 0l7 6A2 2 0 0 1 21 10v2.35" }, { r: "shake", a: 1, o: [12, 12] }],
    ["path", { d: "M14.8 12.4A1 1 0 0 0 14 12h-4a1 1 0 0 0-1 1v8" }, { r: "shake", a: 1, o: [12, 12] }],
    ["path", { d: "m20.5 15.5-5 5" }, { r: "draw", d: 0.12, o: [18, 18] }],
    ["path", { d: "m15.5 15.5 5 5" }, { r: "draw", d: 0.22, o: [18, 18] }],
  ],
});
