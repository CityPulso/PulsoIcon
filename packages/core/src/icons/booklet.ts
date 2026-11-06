import { icon } from "../icon.js";

export const Booklet = icon("Booklet", "booklet", {
  nodes: [
    ["rect", { x: "5", y: "2", width: "14", height: "20", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M9 2v20" }, { r: "fade", o: [9, 12] }],
    ["path", { d: "M12 7h4" }, { r: "growX", d: 0.1, o: [12, 7] }],
    ["path", { d: "M12 11h4" }, { r: "growX", d: 0.18, o: [12, 11] }],
  ],
});
