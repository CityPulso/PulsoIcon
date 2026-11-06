import { icon } from "../icon.js";

// Drawn after Simple Icons "arduino" (CC0-1.0). Arduino is a trademark of its owner.
export const BrandArduino = icon("BrandArduino", "brand-arduino", {
  nodes: [
    [
      "path",
      { d: "M12 12c-1.6-2-3-3.75-5.5-3.75a3.75 3.75 0 0 0 0 7.5c2.5 0 3.9-1.75 5.5-3.75s3-3.75 5.5-3.75a3.75 3.75 0 0 1 0 7.5c-2.5 0-3.9-1.75-5.5-3.75z" },
      { r: "press", a: 0.04, o: [12, 12] },
    ],
    ["path", { d: "M5 12h3" }, { r: "pop", d: 0.1, o: [6.5, 12] }],
    ["path", { d: "M16 12h3M17.5 10.5v3" }, { r: "spin", d: 0.15, o: [17.5, 12] }],
  ],
});
