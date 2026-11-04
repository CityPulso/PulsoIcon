import { createIcon } from "../runtime/createIcon.js";

export const PrinterCloud = createIcon("PrinterCloud", "printer-cloud", {
  nodes: [
    ["path", { d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1" }, { r: "press", a: 0.04, o: [12, 10] }],
    ["path", { d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" }, { r: "press", a: 0.04, o: [12, 10] }],
    ["path", { d: "M9.5 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h3.5" }, { r: "slide", d: 0.05, y: 1, a: 1.5, o: [8, 18] }],
    ["path", { d: "M19.75 22H15.5a3.5 3.5 0 1 1 3.355-4.5h.895a2.25 2.25 0 1 1 0 4.5z" }, { r: "float", d: 0.1, a: 1, o: [17.5, 18.5] }],
  ],
});
