import { icon } from "../icon.js";

// Adapted from Tabler Icons "relation-many-to-many" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const RelationManyToMany = icon("RelationManyToMany", "relation-many-to-many", {
  nodes: [
    ["path", { d: "M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" }],
    ["path", { d: "M15 14v-4l3 4v-4" }, { r: "draw", d: 0.3 }],
    ["path", { d: "M6 14v-4l3 4v-4" }, { r: "draw" }],
    ["path", { d: "M12 10.5l0 .01" }, { r: "pop", d: 0.2, o: [12, 10.5] }],
    ["path", { d: "M12 13.5l0 .01" }, { r: "pop", d: 0.25, o: [12, 13.5] }],
  ],
});
