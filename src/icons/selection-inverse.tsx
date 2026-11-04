import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "selection-inverse" (MIT, Copyright (c) 2023 Phosphor Icons).
export const SelectionInverse = createIcon("SelectionInverse", "selection-inverse", {
  nodes: [
    ["path", { d: "M3 3h16a2 2 0 0 1 2 2v16z" }, { r: "fade", o: [14, 10] }],
    ["path", { d: "M3 9v1" }, { r: "pop", d: 0.2, o: [10, 14] }],
    ["path", { d: "M3 14v1" }, { r: "pop", d: 0.25, o: [10, 14] }],
    ["path", { d: "M5 21a2 2 0 0 1-2-2" }, { r: "pop", d: 0.3, o: [10, 14] }],
    ["path", { d: "M9 21h1" }, { r: "pop", d: 0.35, o: [10, 14] }],
    ["path", { d: "M14 21h1" }, { r: "pop", d: 0.4, o: [10, 14] }],
  ],
});
