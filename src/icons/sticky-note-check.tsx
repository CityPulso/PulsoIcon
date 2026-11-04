import { createIcon } from "../runtime/createIcon.js";

export const StickyNoteCheck = createIcon("StickyNoteCheck", "sticky-note-check", {
  nodes: [
    ["path", { d: "m15 19 2 2 4-4" }, { r: "draw", d: 0.15, o: [18, 19] }],
    ["path", { d: "M15 3v5a1 1 0 0 0 1 1h5" }, { r: "fold", d: 0.05, o: [18, 6] }],
    ["path", { d: "M21 13V9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6.5" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
