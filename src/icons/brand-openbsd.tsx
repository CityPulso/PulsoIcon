import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "openbsd" (CC0-1.0). OpenBSD is a trademark of its owner.
export const BrandOpenbsd = createIcon("BrandOpenbsd", "brand-openbsd", {
  nodes: [
    ["circle", { cx: "13.5", cy: "12", r: "6" }, { r: "pulse", a: 0.12, o: [13.5, 12] }],
    ["path", { d: "M7.5 12 3 9v6z" }, { r: "sway", d: 0.1, o: [7.5, 12] }],
    ["path", { d: "M16 10.5h.01" }, { r: "blink", d: 0.2, o: [16, 10.5] }],
    [
      "path",
      { d: "M9.75 5.5L9 4.21M13.5 4.5L13.5 3M17.25 5.5L18 4.21M20 8.25L21.29 7.5M21 12L22.5 12M20 15.75L21.29 16.5M17.25 18.5L18 19.79M13.5 19.5L13.5 21M9.75 18.5L9 19.79" },
      { r: "pulse", a: 0.12, o: [13.5, 12] },
    ],
  ],
});
