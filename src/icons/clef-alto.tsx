import { createIcon } from "../runtime/createIcon.js";

export const ClefAlto = createIcon("ClefAlto", "clef-alto", {
  nodes: [
    ["path", { d: "M10 4v16" }, { r: "grow", o: [10, 12] }],
    ["path", { d: "M14 4.764a3 3 0 1 1-.152 4.327A4 4 0 0 1 10 12a4 4 0 0 1 3.848 2.909A3 3 0 1 1 14 19.236" }, { r: "redraw", o: [14.5, 12] }],
    ["path", { d: "M6 4v16" }, { r: "grow", d: 0.08, o: [6, 12] }],
  ],
});
