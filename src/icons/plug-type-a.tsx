import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "plug-type-a" (MIT, Copyright (c) 2021 Luca Burgio).
export const PlugTypeA = createIcon("PlugTypeA", "plug-type-a", {
  nodes: [
    ["path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" }],
    ["path", { d: "M9 10V14" }, { r: "pop", o: [9, 12] }],
    ["path", { d: "M15 10V14" }, { r: "pop", d: 0.1, o: [15, 12] }],
  ],
});
