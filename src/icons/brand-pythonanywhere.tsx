import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "pythonanywhere" (CC0-1.0). PythonAnywhere is a trademark of its owner.
export const BrandPythonanywhere = createIcon("BrandPythonanywhere", "brand-pythonanywhere", {
  nodes: [
    ["path", { d: "M2.5 4h6.5L5.75 9.5z" }, { r: "pop", o: [5.75, 6] }],
    ["path", { d: "M2.5 12.5l6 3-6 3z" }, { r: "pop", d: 0.1, o: [4.5, 15.5] }],
    ["circle", { cx: "15", cy: "15", r: "4.5" }, { r: "wobble", d: 0.15, a: 8, o: [15, 15] }],
    ["path", { d: "M13.5 14.5h.01M16.5 14.5h.01" }, { r: "blink", d: 0.3, o: [15, 14.5] }],
    ["path", { d: "M18 11.5l2.5-3.5M20.5 8V4.5M20.5 8l1.5-1.5" }, { r: "draw", d: 0.25 }],
  ],
});
