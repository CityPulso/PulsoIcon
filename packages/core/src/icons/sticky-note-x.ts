import { icon } from "../icon.js";

export const StickyNoteX = icon("StickyNoteX", "sticky-note-x", {
  nodes: [
    ["path", { d: "M15 3v5a1 1 0 0 0 1 1h5" }, { r: "fade", o: [18, 6] }],
    ["path", { d: "m16 16 5 5" }, { r: "draw", d: 0.15, o: [18.5, 18.5] }],
    ["path", { d: "M21 12V9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7" }, { r: "shake", a: 1, o: [12, 12] }],
    ["path", { d: "m21 16-5 5" }, { r: "draw", d: 0.25, o: [18.5, 18.5] }],
  ],
});
