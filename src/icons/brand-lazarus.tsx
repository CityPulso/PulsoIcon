import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "lazarus" (CC0-1.0). Lazarus is a trademark of its owner.

export const BrandLazarus = createIcon("BrandLazarus", "brand-lazarus", {
  nodes: [
    ["ellipse", { cx: "5", cy: "11", rx: "1.7", ry: "2.2" }, { r: "pop", o: [5, 11] }],
    ["ellipse", { cx: "9", cy: "6", rx: "1.7", ry: "2.4" }, { r: "pop", d: 0.08, o: [9, 6] }],
    ["ellipse", { cx: "15", cy: "6", rx: "1.7", ry: "2.4" }, { r: "pop", d: 0.16, o: [15, 6] }],
    ["ellipse", { cx: "19", cy: "11", rx: "1.7", ry: "2.2" }, { r: "pop", d: 0.24, o: [19, 11] }],
    ["path", { d: "M12 13c-3 0-5 3.5-5 5.5 0 1.5 1 2.5 2.5 2.5 1 0 1.5-.5 2.5-.5s1.5.5 2.5.5c1.5 0 2.5-1 2.5-2.5 0-2-2-5.5-5-5.5z" }, { r: "press", a: 0.05, o: [12, 21] }],
  ],
});
