import { icon } from "../icon.js";

export const SlidersVertical = icon("SlidersVertical", "sliders-vertical", {
  nodes: [
    ["path", { d: "M10 8h4" }, { r: "slide", y: 1, a: 2, o: [12, 12] }],
    ["path", { d: "M12 21v-9" }, { r: "slide", y: 1, a: 2, o: [12, 12] }],
    ["path", { d: "M12 8V3" }, { r: "slide", y: 1, a: 2, o: [12, 12] }],
    ["path", { d: "M17 16h4" }, { r: "slide", d: 0.12, y: -1, a: 2, o: [19, 12] }],
    ["path", { d: "M19 12V3" }, { r: "slide", d: 0.12, y: -1, a: 2, o: [19, 12] }],
    ["path", { d: "M19 21v-5" }, { r: "slide", d: 0.12, y: -1, a: 2, o: [19, 12] }],
    ["path", { d: "M3 14h4" }, { r: "slide", d: 0.06, y: -1, a: 2, o: [5, 12] }],
    ["path", { d: "M5 10V3" }, { r: "slide", d: 0.06, y: -1, a: 2, o: [5, 12] }],
    ["path", { d: "M5 21v-7" }, { r: "slide", d: 0.06, y: -1, a: 2, o: [5, 12] }],
  ],
});
