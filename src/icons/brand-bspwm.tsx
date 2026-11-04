import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "bspwm" (CC0-1.0). bspwm is a trademark of its owner.
export const BrandBspwm = createIcon("BrandBspwm", "brand-bspwm", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M12 2v20" }, { r: "drawOut" }],
    ["path", { d: "M2 12h20" }, { r: "drawOut", d: 0.12 }],
    ["path", { d: "M7 7h.01M17 7h.01M7 17h.01M17 17h.01" }, { r: "pop", d: 0.25, o: [12, 12] }],
  ],
});
