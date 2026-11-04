import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "beer-bottle" (MIT, Copyright (c) 2023 Phosphor Icons).

export const BeerBottle = createIcon("BeerBottle", "beer-bottle", {
  svg: { r: "sway", a: 8, o: [6, 18] },
  nodes: [
    ["path", { d: "M3.48 16.28L9.84 9.91 13.73 8.15 16.91 4.96 19.04 7.09 15.85 10.27 14.09 14.16 7.72 20.52Z" }],
    ["path", { d: "M5.25 14.51L9.49 18.75" }],
    ["path", { d: "M8.07 11.68L12.32 15.93" }],
    ["path", { d: "M16.21 4.26L19.74 7.79" }, { r: "lift", x: 1, y: -1, a: 15, o: [18, 6] }],
  ],
});
