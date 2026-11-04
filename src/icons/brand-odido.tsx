import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "odido" (CC0-1.0). Odido is a trademark of its owner.
export const BrandOdido = createIcon("BrandOdido", "brand-odido", {
  nodes: [
    ["circle", { cx: "3.75", cy: "12", r: "2.25" }, { r: "pop", o: [3.75, 12] }],
    ["path", { d: "M8 9.75v4.5a2.25 2.25 0 0 0 0-4.5" }, { r: "pop", d: 0.08, o: [9, 12] }],
    ["path", { d: "M12.25 9.75v4.5" }, { r: "pop", d: 0.16, o: [12.25, 12] }],
    ["path", { d: "M16.5 9.75a2.25 2.25 0 0 0 0 4.5" }, { r: "pop", d: 0.24, o: [15.5, 12] }],
    ["circle", { cx: "20.25", cy: "12", r: "2.25" }, { r: "pop", d: 0.32, o: [20.25, 12] }],
  ],
});
