import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "bell-cog" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BellCog = createIcon("BellCog", "bell-cog", {
  nodes: [
    ["path", { d: "M12 17h-8a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6a2 2 0 1 1 4 0a7 7 0 0 1 4 6v.5" }, { r: "ring", a: 8, o: [12, 3] }],
    ["path", { d: "M17.001 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "spin", a: 180, o: [19, 19] }],
    ["path", { d: "M19.001 15.5v1.5" }, { r: "spin", a: 180, o: [19, 19] }],
    ["path", { d: "M19.001 21v1.5" }, { r: "spin", a: 180, o: [19, 19] }],
    ["path", { d: "M22.032 17.25l-1.299 .75" }, { r: "spin", a: 180, o: [19, 19] }],
    ["path", { d: "M17.27 20l-1.3 .75" }, { r: "spin", a: 180, o: [19, 19] }],
    ["path", { d: "M15.97 17.25l1.3 .75" }, { r: "spin", a: 180, o: [19, 19] }],
    ["path", { d: "M20.733 20l1.3 .75" }, { r: "spin", a: 180, o: [19, 19] }],
    ["path", { d: "M9 17v1a3 3 0 0 0 3 3" }, { r: "ring", a: 8, o: [12, 3] }],
  ],
});
