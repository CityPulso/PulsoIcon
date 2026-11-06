import { icon } from "../icon.js";

// Adapted from Tabler Icons "planet-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PlanetOff = icon("PlanetOff", "planet-off", {
  nodes: [
    ["path", { d: "M7.042 7.059a7 7 0 0 0 9.908 9.89m1.581 -2.425a7 7 0 0 0 -9.057 -9.054" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
  solid: [
    [
      "path",
      { d: "M18.816 13.58c2.292 2.138 3.546 4 3.092 4.9c-.745 1.46 -5.783 -.259 -11.255 -3.838c-5.47 -3.579 -9.304 -7.664 -8.56 -9.123c.464 -.91 2.926 -.444 5.803 .805" },
      { r: "spin", a: 90, o: [12, 12] },
      "line",
    ],
    ["path", { d: "M5 12a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
