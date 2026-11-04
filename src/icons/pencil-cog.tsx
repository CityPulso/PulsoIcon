import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "pencil-cog" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PencilCog = createIcon("PencilCog", "pencil-cog", {
  nodes: [
    ["path", { d: "M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" }],
    ["path", { d: "M13.5 6.5l4 4" }],
    ["path", { d: "M17.001 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "spin", a: 180, o: [19, 19] }],
    ["path", { d: "M19.001 15.5v1.5" }, { r: "spin", a: 180, o: [19, 19] }],
    ["path", { d: "M19.001 21v1.5" }, { r: "spin", a: 180, o: [19, 19] }],
    ["path", { d: "M22.032 17.25l-1.299 .75" }, { r: "spin", a: 180, o: [19, 19] }],
    ["path", { d: "M17.27 20l-1.3 .75" }, { r: "spin", a: 180, o: [19, 19] }],
    ["path", { d: "M15.97 17.25l1.3 .75" }, { r: "spin", a: 180, o: [19, 19] }],
    ["path", { d: "M20.733 20l1.3 .75" }, { r: "spin", a: 180, o: [19, 19] }],
  ],
});
