import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "instructables" (CC0-1.0). Instructables is a trademark of its owner.
export const BrandInstructables = createIcon("BrandInstructables", "brand-instructables", {
  nodes: [
    ["rect", { x: "9", y: "2.5", width: "6", height: "4", rx: "1" }, { r: "wobble", a: 6, o: [12, 20] }],
    ["path", { d: "M12 6.5V8" }, { r: "wobble", a: 6, o: [12, 20] }],
    ["rect", { x: "5", y: "8", width: "14", height: "10", rx: "2" }, { r: "wobble", a: 6, o: [12, 20] }],
    ["path", { d: "M9.5 11.5h.01M14.5 11.5h.01" }, { r: "blink", d: 0.2, o: [12, 11.5] }],
    ["path", { d: "M9.5 14.5h5" }, { r: "wobble", a: 6, o: [12, 20] }],
    ["circle", { cx: "9", cy: "20.5", r: "1.5" }, { r: "roll", d: 0.1, o: [9, 20.5] }],
    ["circle", { cx: "15", cy: "20.5", r: "1.5" }, { r: "roll", d: 0.1, o: [15, 20.5] }],
  ],
});
