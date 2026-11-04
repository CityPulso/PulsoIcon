import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "fireflyiii" (CC0-1.0). Firefly III is a trademark of its owner.
export const BrandFireflyIii = createIcon("BrandFireflyIii", "brand-firefly-iii", {
  nodes: [
    [
      "path",
      { d: "M12 22a7.5 7.5 0 0 1-7.5-7.5c0-3.5 2-6 3.5-8 .5 1.5 1 2.5 2 3 0-3 1.5-5.5 3-7.5.5 2.5 2 4 3.5 6 1.5 2 3 4 3 6.5A7.5 7.5 0 0 1 12 22" },
      { r: "sway", a: 4, o: [12, 22] },
    ],
    ["ellipse", { cx: "12", cy: "15.5", rx: "3.5", ry: "2.5" }, { r: "jelly", d: 0.1, a: 0.08, o: [12, 18] }],
    ["path", { d: "M10 18v1.5M14 18v1.5M14.5 14l.5-1.5" }, { r: "jelly", d: 0.1, a: 0.08, o: [12, 18] }],
  ],
});
