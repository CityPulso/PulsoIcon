import { createIcon } from "../runtime/createIcon.js";

export const CropRotateBl = createIcon("CropRotateBl", "crop-rotate-bl", {
  nodes: [
    ["path", { d: "M11 16V7A2 2 0 0 1 13 5H21" }, { r: "press", a: 0.08, o: [15, 9] }],
    ["path", { d: "M19 3V11A2 2 0 0 1 17 13H8" }, { r: "press", a: 0.08, o: [15, 9] }],
    ["path", { d: "M3 13A7 7 0 0 0 10 20" }, { r: "turn", a: -25, o: [15, 9] }],
    ["path", { d: "M8 22L10 20L8 18" }, { r: "turn", a: -25, o: [15, 9] }],
  ],
});
