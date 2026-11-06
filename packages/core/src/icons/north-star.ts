import { icon } from "../icon.js";

// Adapted from Tabler Icons "north-star" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const NorthStar = icon("NorthStar", "north-star", {
  nodes: [
    ["path", { d: "M3 12h18" }, { r: "twinkle", o: [12, 12] }],
    ["path", { d: "M12 21v-18" }, { r: "twinkle", o: [12, 12] }],
    ["path", { d: "M7.5 7.5l9 9" }, { r: "twinkle", o: [12, 12] }],
    ["path", { d: "M7.5 16.5l9 -9" }, { r: "twinkle", o: [12, 12] }],
  ],
});
