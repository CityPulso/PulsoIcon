import { createIcon } from "../runtime/createIcon.js";

export const Printer3d = createIcon("Printer3d", "printer-3d", {
  nodes: [
    ["path", { d: "M10 11v1" }, { r: "slide", x: 1, a: 2, o: [10, 9] }],
    ["path", { d: "M12 8h8" }, { r: "fade", o: [12, 8] }],
    ["path", { d: "M15 20v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3" }, { r: "grow", d: 0.15, o: [12, 20] }],
    ["path", { d: "M4 20h16" }, { r: "press", a: 0.03, o: [12, 12] }],
    ["path", { d: "M4 22V4a2 2 0 012-2h12a2 2 0 012 2v18" }, { r: "press", a: 0.03, o: [12, 12] }],
    ["path", { d: "M4 8h4" }, { r: "fade", o: [12, 8] }],
    ["path", { d: "M8.635 10.093A2 2 0 018 8.631V7a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-.293.707l-1 1a1 1 0 01-1.414 0z" }, { r: "slide", x: 1, a: 2, o: [10, 9] }],
  ],
});
