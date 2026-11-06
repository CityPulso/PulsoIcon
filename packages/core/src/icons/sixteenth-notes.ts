import { icon } from "../icon.js";

export const SixteenthNotes = icon("SixteenthNotes", "sixteenth-notes", {
  nodes: [
    ["path", { d: "M21 16V3a1 1 0 0 0-1.28-.96l-10 2.917a1 1 0 0 0-.72.96V19" }, { r: "swing", a: 6, o: [15, 2] }],
    ["path", { d: "M21 6 9 9.5" }, { r: "swing", a: 6, o: [15, 2] }],
    ["circle", { cx: "18", cy: "16", r: "3" }, { r: "bounce", y: -1, a: 1.5, o: [18, 16] }],
    ["circle", { cx: "6", cy: "19", r: "3" }, { r: "bounce", d: 0.1, y: -1, a: 1.5, o: [6, 19] }],
  ],
});
