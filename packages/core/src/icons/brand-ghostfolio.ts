import { icon } from "../icon.js";

// Drawn after Simple Icons "ghostfolio" (CC0-1.0). Ghostfolio is a trademark of its owner.
export const BrandGhostfolio = icon("BrandGhostfolio", "brand-ghostfolio", {
  nodes: [
    [
      "path",
      { d: "M5 20.5V11a7 7 0 0 1 14 0v9.5a1 1 0 0 1-1.6.8l-1.2-.9-1.6 1.2a1 1 0 0 1-1.2 0L12 20.4l-1.4 1.2a1 1 0 0 1-1.2 0l-1.6-1.2-1.2.9A1 1 0 0 1 5 20.5z" },
      { r: "float", a: 1.5, o: [12, 12] },
    ],
    ["circle", { cx: "9.5", cy: "11", r: "1.5" }, { r: "blink", d: 0.2, o: [12, 11] }],
    ["circle", { cx: "14.5", cy: "11", r: "1.5" }, { r: "blink", d: 0.2, o: [12, 11] }],
  ],
});
