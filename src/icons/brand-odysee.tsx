import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "odysee" (CC0-1.0). Odysee is a trademark of its owner.
export const BrandOdysee = createIcon("BrandOdysee", "brand-odysee", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["circle", { cx: "14.5", cy: "8", r: "2.25" }, { r: "float", a: 1.5, o: [12, 12] }],
    ["path", { d: "M13 9.8 9.5 14 6 13m3.5 1 2 4m.5-6 4 1.5m-.5-6 2.5 2" }, { r: "float", a: 1.5, o: [12, 12] }],
    ["path", { d: "M6.5 8h.01M17.5 17h.01" }, { r: "twinkle", d: 0.2, o: [12, 12] }],
  ],
});
