import { icon } from "../icon.js";

export const Painting = icon("Painting", "painting", {
  nodes: [
    ["rect", { width: "16", height: "12", x: "4", y: "3", rx: "1" }, { r: "swing", a: 4, o: [12, 3] }],
    ["path", { d: "m4 13 4-4 4 4 2-2 4 4" }, { r: "swing", a: 4, o: [12, 3] }],
    ["circle", { cx: "15.5", cy: "7", r: "1.5" }, { r: "rise", d: 0.1, a: 2, o: [15.5, 7] }],
    ["path", { d: "m8 15-2 6" }],
    ["path", { d: "m16 15 2 6" }],
    ["path", { d: "M12 15v4" }],
  ],
});
