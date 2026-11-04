import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "perl" (CC0-1.0). Perl is a trademark of its owner.
export const BrandPerl = createIcon("BrandPerl", "brand-perl", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M5 9.5h2.5c1 0 1.5 1 1.5 2v1c0 1 1 1.5 2 1 1.5-1 2-4 4-4s3 3 3.5 5c.2.8.3 1.5.3 2.5" }, { r: "slide", x: -1, a: 1, o: [12, 12] }],
    ["path", { d: "M10.5 14v4.5M13 14.5v4M17 16.5l-.5 3" }, { r: "sway", d: 0.1, a: 4, o: [14, 14] }],
  ],
});
