import { createIcon } from "../runtime/createIcon.js";

export const PaintbrushVertical = createIcon("PaintbrushVertical", "paintbrush-vertical", {
  nodes: [
    ["path", { d: "M10 2v2" }, { r: "fade", o: [12, 4] }],
    ["path", { d: "M14 2v4" }, { r: "fade", o: [12, 4] }],
    ["path", { d: "M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z" }, { r: "sway", a: 10, o: [12, 2] }],
    ["path", { d: "M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1" }, { r: "sway", a: 10, o: [12, 2] }],
  ],
});
