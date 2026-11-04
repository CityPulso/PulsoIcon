import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "columns-plus-left" (MIT, Copyright (c) 2023 Phosphor Icons).
export const ColumnsPlusLeft = createIcon("ColumnsPlusLeft", "columns-plus-left", {
  nodes: [
    ["rect", { width: "3.5", height: "18", x: "11", y: "3", rx: "1" }, { r: "slide", x: 1, a: 1, o: [12.75, 12] }],
    ["rect", { width: "3.5", height: "18", x: "17.5", y: "3", rx: "1" }, { r: "slide", d: 0.05, x: 1, a: 1, o: [19.25, 12] }],
    ["path", { d: "M3 12h5M5.5 9.5v5" }, { r: "spin", d: 0.15, a: 90, o: [5.5, 12] }],
  ],
});
