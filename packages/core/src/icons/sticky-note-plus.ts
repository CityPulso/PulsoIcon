import { icon } from "../icon.js";

export const StickyNotePlus = icon("StickyNotePlus", "sticky-note-plus", {
  nodes: [
    ["path", { d: "M15 3v5a1 1 0 0 0 1 1h5" }, { r: "fold", d: 0.05, o: [18, 6] }],
    ["path", { d: "M18 15v6" }, { r: "spin", d: 0.15, a: 90, o: [18, 18] }],
    ["path", { d: "M21 12.356V9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.355" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M21 18h-6" }, { r: "spin", d: 0.15, a: 90, o: [18, 18] }],
  ],
});
