import { icon } from "../icon.js";

export const Fax = icon("Fax", "fax", {
  nodes: [
    ["rect", { x: "2", y: "9", width: "20", height: "12", rx: "2" }, { r: "press", a: 0.04, o: [12, 15] }],
    ["path", { d: "M8 9v12" }, { r: "press", a: 0.04, o: [12, 15] }],
    ["path", { d: "M11 9V3h5l2 2v4" }, { r: "slide", y: -1, a: 1.5, o: [14.5, 6] }],
    ["path", { d: "M12 13h.01M15 13h.01M18 13h.01M12 17h.01M15 17h.01M18 17h.01" }, { r: "pop", d: 0.15, o: [15, 15] }],
  ],
});
