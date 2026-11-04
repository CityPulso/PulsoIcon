import { createIcon } from "../runtime/createIcon.js";

export const Castle = createIcon("Castle", "castle", {
  nodes: [
    ["path", { d: "M10 5V3" }, { r: "grow", d: 0.1, o: [10, 4] }],
    ["path", { d: "M14 5V3" }, { r: "grow", d: 0.15, o: [14, 4] }],
    ["path", { d: "M15 21v-3a3 3 0 0 0-6 0v3" }, { r: "press", a: 0.04, o: [12, 21] }],
    ["path", { d: "M18 3v8" }, { r: "grow", d: 0.2, o: [18, 7] }],
    ["path", { d: "M18 5H6" }, { r: "fade", d: 0.2, o: [12, 8] }],
    ["path", { d: "M22 11H2" }, { r: "fade", d: 0.2, o: [12, 8] }],
    ["path", { d: "M22 9v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9" }, { r: "press", a: 0.04, o: [12, 21] }],
    ["path", { d: "M6 3v8" }, { r: "grow", d: 0.25, o: [6, 7] }],
  ],
});
