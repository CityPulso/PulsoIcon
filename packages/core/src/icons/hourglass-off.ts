import { icon } from "../icon.js";

// Solid from Tabler Icons "hourglass" filled (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const HourglassOff = icon("HourglassOff", "hourglass-off", {
  nodes: [
    ["path", { d: "M6 2h13" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M17 2v4.172a2 2 0 0 1-.586 1.414L14 10" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M10 14l-2.414 2.414A2 2 0 0 0 7 17.828V22" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M5 22h13" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.1, o: [12, 12] }],
  ],
  solid: [
    [
      "path",
      {
        d: "M17 2a2 2 0 0 1 1.995 1.85l.005 .15v2a6.996 6.996 0 0 1 -3.393 6a6.994 6.994 0 0 1 3.388 5.728l.005 .272v2a2 2 0 0 1 -1.85 1.995l-.15 .005h-10a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-2a6.996 6.996 0 0 1 3.393 -6a6.994 6.994 0 0 1 -3.388 -5.728l-.005 -.272v-2a2 2 0 0 1 1.85 -1.995l.15 -.005h10z",
        stroke: "none",
      },
      { r: "fade", o: [12, 12] },
    ],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.1, o: [12, 12] }, "line"],
  ],
});
