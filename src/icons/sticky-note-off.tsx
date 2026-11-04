import { createIcon } from "../runtime/createIcon.js";

export const StickyNoteOff = createIcon("StickyNoteOff", "sticky-note-off", {
  nodes: [
    ["path", { d: "M15 3v5a1 1 0 0 0 1 1h5" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.1, o: [12, 12] }],
    ["path", { d: "M3.586 3.586A2 2 0 0 0 3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.414-.586" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M8.656 3H15a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 21 9v6.344" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
