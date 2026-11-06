import { icon } from "../icon.js";

// Adapted from Tabler Icons "wind-electricity" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const WindElectricity = icon("WindElectricity", "wind-electricity", {
  nodes: [
    ["path", { d: "M20 7l-3 5h4l-3 5" }, { r: "flicker", d: 0.2, o: [19, 12] }],
    ["path", { d: "M3 16h4a2 2 0 1 1 0 4" }, { r: "slide", d: 0.1, x: 1, y: 0, a: 1.5 }],
    ["path", { d: "M3 12h8a2 2 0 1 0 0 -4" }, { r: "slide", d: 0, x: 1, y: 0, a: 1.5 }],
    ["path", { d: "M3 8h3a2 2 0 1 0 0 -4" }, { r: "slide", d: 0.05, x: 1, y: 0, a: 1.5 }],
  ],
});
