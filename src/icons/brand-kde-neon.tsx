import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "kdeneon" (CC0-1.0). KDE neon is a trademark of its owner.
export const BrandKdeNeon = createIcon("BrandKdeNeon", "brand-kde-neon", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "3.5" }, { r: "pulse", a: 0.1, o: [12, 12] }],
    ["path", { d: "M12 5.5h.01 M18.5 12h.01 M12 18.5h.01 M5.5 12h.01" }, { r: "spin", o: [12, 12] }],
  ],
});
