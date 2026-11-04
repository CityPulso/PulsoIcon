import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "subaru" (CC0-1.0). Subaru is a trademark of its owner.
export const BrandSubaru = createIcon("BrandSubaru", "brand-subaru", {
  nodes: [
    ["ellipse", { cx: "12", cy: "12", rx: "10", ry: "7" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M8 9l.9 2.1L11 12l-2.1.9L8 15l-.9-2.1L5 12l2.1-.9z" }, { r: "twinkle", d: 0.05, o: [8, 12] }],
    ["path", { d: "M14 11h.01" }, { r: "pop", d: 0.15, o: [14, 11] }],
    ["path", { d: "M16.5 9.5h.01" }, { r: "pop", d: 0.22, o: [16.5, 9.5] }],
    ["path", { d: "M18 12.5h.01" }, { r: "pop", d: 0.29, o: [18, 12.5] }],
    ["path", { d: "M15.5 14.5h.01" }, { r: "pop", d: 0.36, o: [15.5, 14.5] }],
  ],
});
