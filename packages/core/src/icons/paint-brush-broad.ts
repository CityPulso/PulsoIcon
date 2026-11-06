import { icon } from "../icon.js";

// Drawn after Phosphor Icons "paint-brush-broad" (MIT, Copyright (c) 2023 Phosphor Icons).
// Solid from Phosphor Icons "paint-brush-broad" fill (MIT, Copyright (c) 2023 Phosphor Icons).
export const PaintBrushBroad = icon("PaintBrushBroad", "paint-brush-broad", {
  nodes: [
    ["rect", { width: "16", height: "7", x: "4", y: "3", rx: "1" }, { r: "tilt", a: 10, o: [12, 21] }],
    ["path", { d: "M15 3v3" }, { r: "tilt", a: 10, o: [12, 21] }],
    ["path", { d: "M9 10v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2" }, { r: "tilt", a: 10, o: [12, 21] }],
    ["path", { d: "M11 13v6.5a1 1 0 0 0 2 0V13" }, { r: "tilt", a: 10, o: [12, 21] }],
  ],
  solid: [
    [
      "path",
      {
        d: "M20.25 2.25H6.75A3.75 3.75 0 0 0 3 6v6.75a2.25 2.25 0 0 0 2.25 2.25h4.5l-0.74 4.375A0.789 0.789 0 0 0 9 19.5a3 3 0 0 0 6 0 0.789 0.789 0 0 0-0.01-0.125L14.25 15h4.5a2.25 2.25 0 0 0 2.25-2.25V3A0.75 0.75 0 0 0 20.25 2.25ZM6.75 3.75H16.5V7.5a0.75 0.75 0 0 0 1.5 0V3.75h1.5v6.75H4.5V6A2.25 2.25 0 0 1 6.75 3.75Z",
        stroke: "none",
      },
      { r: "tilt", a: 10, o: [12, 21] },
    ],
  ],
});
