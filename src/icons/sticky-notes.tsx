import { createIcon } from "../runtime/createIcon.js";

export const StickyNotes = createIcon("StickyNotes", "sticky-notes", {
  nodes: [
    ["path", { d: "M10 8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 16 14v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2z" }, { r: "swing", d: 0.05, a: -6, o: [9, 8] }],
    ["path", { d: "M10 8v5a1 1 0 0 0 1 1h5" }, { r: "swing", d: 0.05, a: -6, o: [9, 8] }],
    ["path", { d: "M8 4a2 2 0 0 1 2-2h6a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 22 8v6a2 2 0 0 1-2 2" }, { r: "slide", x: 1, y: -1, a: 1.5, o: [15, 9] }],
    ["path", { d: "M16 2v5a1 1 0 0 0 1 1h5" }, { r: "slide", x: 1, y: -1, a: 1.5, o: [15, 9] }],
  ],
});
