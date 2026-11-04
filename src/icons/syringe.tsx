import { createIcon } from "../runtime/createIcon.js";

export const Syringe = createIcon("Syringe", "syringe", {
  nodes: [
    ["path", { d: "m18 2 4 4" }, { r: "slide", x: -1, y: 1, a: 1.5, o: [18, 6] }],
    ["path", { d: "m17 7 3-3" }, { r: "slide", x: -1, y: 1, a: 1.5, o: [18, 6] }],
    ["path", { d: "M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5" }, { r: "press", d: 0.1, a: 0.04, o: [10.5, 13.5] }],
    ["path", { d: "m9 11 4 4" }, { r: "press", d: 0.1, a: 0.04, o: [10.5, 13.5] }],
    ["path", { d: "m5 19-3 3" }, { r: "press", d: 0.1, a: 0.04, o: [10.5, 13.5] }],
    ["path", { d: "m14 4 6 6" }, { r: "slide", x: -1, y: 1, a: 1.5, o: [18, 6] }],
  ],
});
