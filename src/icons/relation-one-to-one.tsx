import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "relation-one-to-one" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const RelationOneToOne = createIcon("RelationOneToOne", "relation-one-to-one", {
  nodes: [
    ["path", { d: "M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" }],
    ["path", { d: "M8 10h1v4" }, { r: "draw" }],
    ["path", { d: "M15 10h1v4" }, { r: "draw", d: 0.3 }],
    ["path", { d: "M12 10.5l0 .01" }, { r: "pop", d: 0.2, o: [12, 10.5] }],
    ["path", { d: "M12 13.5l0 .01" }, { r: "pop", d: 0.25, o: [12, 13.5] }],
  ],
});
