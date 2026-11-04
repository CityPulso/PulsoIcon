import { createIcon } from "../runtime/createIcon.js";

export const CropRotateBr = createIcon("CropRotateBr", "crop-rotate-br", {
  nodes: [
    ["path", { d: "M13 16V7A2 2 0 0 0 11 5H3" }, { r: "press", a: 0.08, o: [9, 9] }],
    ["path", { d: "M5 3V11A2 2 0 0 0 7 13H16" }, { r: "press", a: 0.08, o: [9, 9] }],
    ["path", { d: "M21 13A7 7 0 0 1 14 20" }, { r: "turn", a: 25, o: [9, 9] }],
    ["path", { d: "M16 22L14 20L16 18" }, { r: "turn", a: 25, o: [9, 9] }],
  ],
});
