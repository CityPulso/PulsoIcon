import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "selection-plus" (MIT, Copyright (c) 2023 Phosphor Icons).
export const SelectionPlus = createIcon("SelectionPlus", "selection-plus", {
  nodes: [
    ["path", { d: "M5 3a2 2 0 0 0-2 2" }, { r: "fade", d: 0.0, o: [12, 12] }],
    ["path", { d: "M9 3h1" }, { r: "fade", d: 0.04, o: [12, 12] }],
    ["path", { d: "M14 3h1" }, { r: "fade", d: 0.08, o: [12, 12] }],
    ["path", { d: "M19 3a2 2 0 0 1 2 2" }, { r: "fade", d: 0.12, o: [12, 12] }],
    ["path", { d: "M21 9v1" }, { r: "fade", d: 0.16, o: [12, 12] }],
    ["path", { d: "M3 9v1" }, { r: "fade", d: 0.2, o: [12, 12] }],
    ["path", { d: "M3 14v1" }, { r: "fade", d: 0.24, o: [12, 12] }],
    ["path", { d: "M5 21a2 2 0 0 1-2-2" }, { r: "fade", d: 0.28, o: [12, 12] }],
    ["path", { d: "M9 21h1" }, { r: "fade", d: 0.32, o: [12, 12] }],
    ["path", { d: "M18 15v6" }, { r: "spin", d: 0.15, a: 90, o: [18, 18] }],
    ["path", { d: "M15 18h6" }, { r: "spin", d: 0.15, a: 90, o: [18, 18] }],
  ],
});
