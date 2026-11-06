import { icon } from "../icon.js";

export const CableCar = icon("CableCar", "cable-car", {
  nodes: [
    ["path", { d: "M10 3h.01" }, { r: "pop", d: 0.1, o: [10.005, 3] }],
    ["path", { d: "M14 2h.01" }, { r: "pop", d: 0.18, o: [14.005, 2] }],
    ["path", { d: "m2 9 20-5" }, { r: "redraw", o: [12, 6.5] }],
    ["path", { d: "M12 12V6.5" }, { r: "swing", a: 8, o: [12, 6.5] }],
    ["rect", { width: "16", height: "10", x: "4", y: "12", rx: "3" }, { r: "swing", a: 8, o: [12, 6.5] }],
    ["path", { d: "M9 12v5" }, { r: "swing", a: 8, o: [12, 6.5] }],
    ["path", { d: "M15 12v5" }, { r: "swing", a: 8, o: [12, 6.5] }],
    ["path", { d: "M4 17h16" }, { r: "swing", a: 8, o: [12, 6.5] }],
  ],
});
