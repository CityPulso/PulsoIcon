import { icon } from "../icon.js";

// Adapted from Tabler Icons "relation-one-to-many" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const RelationOneToMany = icon("RelationOneToMany", "relation-one-to-many", {
  nodes: [
    ["path", { d: "M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" }],
    ["path", { d: "M7 10h1v4" }, { r: "draw" }],
    ["path", { d: "M14 14v-4l3 4v-4" }, { r: "draw", d: 0.3 }],
    ["path", { d: "M11 10.5l0 .01" }, { r: "pop", d: 0.2, o: [11, 10.5] }],
    ["path", { d: "M11 13.5l0 .01" }, { r: "pop", d: 0.25, o: [11, 13.5] }],
  ],
});
