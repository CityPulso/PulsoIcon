import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "building-arch" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BuildingArch = createIcon("BuildingArch", "building-arch", {
  nodes: [
    ["path", { d: "M3 21l18 0" }],
    ["path", { d: "M4 21v-15a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v15" }, { r: "press", a: 0.03, o: [12, 21] }],
    ["path", { d: "M9 21v-8a3 3 0 0 1 6 0v8" }, { r: "grow", d: 0.1, o: [12, 21] }],
  ],
});
