import { icon } from "../icon.js";

// Drawn after Simple Icons "lidl" (CC0-1.0). Lidl is a trademark of its owner.

export const BrandLidl = icon("BrandLidl", "brand-lidl", {
  nodes: [
    ["rect", { x: "2", y: "2", width: "20", height: "20", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "7.5" }, { r: "press", d: 0.05, a: 0.06, o: [12, 12] }],
    ["path", { d: "M7.5 9.5v5H10" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M12 12v2.5" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M12 9.5h.01" }, { r: "pop", d: 0.25, o: [12, 9.5] }],
    ["path", { d: "M14 9.5v5h.5a2.5 2.5 0 0 0 0-5z" }, { r: "draw", d: 0.3 }],
  ],
});
