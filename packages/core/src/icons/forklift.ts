import { icon } from "../icon.js";

export const Forklift = icon("Forklift", "forklift", {
  nodes: [
    ["path", { d: "M12 12H5a2 2 0 0 0-2 2v5" }, { r: "slide", d: 0.1, x: 1, a: 1, o: [12.5, 15.5] }],
    ["path", { d: "M15 19h7" }, { r: "slide", d: 0.1, x: 1, a: 1, o: [12.5, 15.5] }],
    ["path", { d: "M16 19V2" }, { r: "slide", y: -1, a: 1.5, o: [11, 10.5] }],
    ["path", { d: "M6 12V7a2 2 0 0 1 2-2h2.172a2 2 0 0 1 1.414.586l3.828 3.828A2 2 0 0 1 16 10.828" }, { r: "slide", y: -1, a: 1.5, o: [11, 10.5] }],
    ["path", { d: "M7 19h4" }, { r: "slide", d: 0.1, x: 1, a: 1, o: [12.5, 15.5] }],
    ["circle", { cx: "13", cy: "19", r: "2" }, { r: "spin", d: 0.1, a: 180, o: [13, 19] }],
    ["circle", { cx: "5", cy: "19", r: "2" }, { r: "spin", d: 0.1, a: 180, o: [5, 19] }],
  ],
});
