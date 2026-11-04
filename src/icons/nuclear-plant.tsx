import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "nuclear-plant" (MIT, Copyright (c) 2023 Phosphor Icons).

export const NuclearPlant = createIcon("NuclearPlant", "nuclear-plant", {
  nodes: [
    ["path", { d: "M8 8h6" }, { r: "press", a: 0.04, o: [11, 20] }],
    ["path", { d: "M8 8c0 5-1.5 8.5-4 12" }, { r: "press", a: 0.04, o: [11, 20] }],
    ["path", { d: "M14 8c0 5 1.5 8.5 4 12" }, { r: "press", a: 0.04, o: [11, 20] }],
    ["path", { d: "M2 20h20" }, { r: "press", a: 0.04, o: [11, 20] }],
    ["path", { d: "M8.5 6c0-1.5 2-1.5 2-3" }, { r: "float", d: 0.1, a: 1.5, o: [9.5, 4.5] }],
    ["path", { d: "M13 6c0-1.5 2-1.5 2-3" }, { r: "float", d: 0.25, a: 1.5, o: [14, 4.5] }],
  ],
});
