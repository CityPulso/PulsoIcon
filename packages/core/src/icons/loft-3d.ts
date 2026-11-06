import { icon } from "../icon.js";

export const Loft3d = icon("Loft3d", "loft-3d", {
  nodes: [
    ["ellipse", { cx: "12", cy: "18", rx: "8", ry: "3" }, { r: "press", a: 0.06, o: [12, 18] }],
    ["path", { d: "M8 6l4-2 4 2-4 2Z" }, { r: "float", a: 1.5, o: [12, 6] }],
    ["path", { d: "M8 6 4 18" }, { r: "draw", d: 0.15, o: [6, 12] }],
    ["path", { d: "M16 6l4 12" }, { r: "draw", d: 0.15, o: [18, 12] }],
  ],
});
