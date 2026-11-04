import { createIcon } from "../runtime/createIcon.js";

export const PoundSterling = createIcon("PoundSterling", "pound-sterling", {
  nodes: [
    ["path", { d: "M17 18a2 2 0 01-2 2H5a3 3 0 003-3V8a4 4 0 018 0" }, { r: "redraw", o: [11, 12] }],
    ["path", { d: "M6 12h7" }, { r: "growX", d: 0.2, o: [6, 12] }],
  ],
});
