import { icon } from "../icon.js";

// Drawn after Simple Icons "scpfoundation" (CC0-1.0). SCP Foundation is a trademark of its owner.
export const BrandScpFoundation = icon("BrandScpFoundation", "brand-scp-foundation", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "9.5" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "3.5" }, { r: "spin", a: 120, o: [12, 12] }],
    [
      "path",
      { d: "M12 2.5L12 6.5M13.6 4.9L12 6.5L10.4 4.9M20.23 16.75L16.76 14.75M17.35 16.94L16.76 14.75L18.95 14.16M3.77 16.75L7.24 14.75M5.05 14.16L7.24 14.75L6.65 16.94" },
      { r: "spin", a: 120, o: [12, 12] },
    ],
  ],
});
