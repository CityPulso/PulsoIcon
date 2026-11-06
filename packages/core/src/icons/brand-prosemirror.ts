import { icon } from "../icon.js";

// Drawn after Simple Icons "prosemirror" (CC0-1.0). ProseMirror is a trademark of its owner.
export const BrandProsemirror = icon("BrandProsemirror", "brand-prosemirror", {
  nodes: [
    ["path", { d: "M20.2 16.75A9.5 9.5 0 1 0 14.5 21.2" }, { r: "draw" }],
    ["path", { d: "M8.5 7.5l1.5 1.5h4l1.5-1.5V13a3.5 3.5 0 0 1-7 0z" }, { r: "tilt", d: 0.1, a: 8, o: [12, 16.5] }],
    ["path", { d: "M10.5 12h.01M13.5 12h.01" }, { r: "blink", d: 0.3, o: [12, 12] }],
    ["path", { d: "M14.5 15.5l5 6" }, { r: "draw", d: 0.25 }],
  ],
});
