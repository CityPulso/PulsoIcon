import { icon } from "../icon.js";

// Drawn after Simple Icons "peugeot" (CC0-1.0). Peugeot is a trademark of its owner.

export const BrandPeugeot = icon("BrandPeugeot", "brand-peugeot", {
  nodes: [
    ["path", { d: "M4.5 3h15v9.5c0 4.5-3 7.5-7.5 9-4.5-1.5-7.5-4.5-7.5-9z" }, { r: "press", a: 0.04, o: [12, 12] }],
    [
      "path",
      { d: "M12 7.5L13.65 9.08L15.91 9.38L15.7 11.65L16.87 13.61L14.97 14.87L14.17 17L12 16.3L9.83 17L9.03 14.87L7.13 13.61L8.3 11.65L8.09 9.38L10.35 9.08z" },
      { r: "spin", a: 30, d: 0.1, o: [12, 12.5] },
    ],
    ["path", { d: "M10.75 12h.01M13.25 12h.01M11.25 14.25h1.5" }, { r: "blink", d: 0.2, o: [12, 13] }],
  ],
});
