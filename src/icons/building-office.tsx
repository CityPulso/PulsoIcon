import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "building-office" (MIT, Copyright (c) 2023 Phosphor Icons).

export const BuildingOffice = createIcon("BuildingOffice", "building-office", {
  nodes: [
    ["path", { d: "M2 21h20" }, { r: "growX", o: [12, 21] }],
    ["path", { d: "M4 21V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v17" }, { r: "press", a: 0.04, o: [12, 21] }],
    ["path", { d: "M15 9h4a1 1 0 0 1 1 1v11" }, { r: "press", a: 0.04, o: [12, 21] }],
    ["path", { d: "M8 7h.01" }, { r: "flicker", o: [10, 10] }],
    ["path", { d: "M11 7h.01" }, { r: "flicker", d: 0.06, o: [10, 10] }],
    ["path", { d: "M8 10.5h.01" }, { r: "flicker", d: 0.12, o: [10, 10] }],
    ["path", { d: "M11 10.5h.01" }, { r: "flicker", d: 0.18, o: [10, 10] }],
    ["path", { d: "M8 14h.01" }, { r: "flicker", d: 0.24, o: [10, 10] }],
    ["path", { d: "M11 14h.01" }, { r: "flicker", d: 0.3, o: [10, 10] }],
    ["path", { d: "M8 21v-3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3" }, { r: "grow", d: 0.2, o: [9.5, 21] }],
    ["path", { d: "M17.5 13v4" }, { r: "flicker", d: 0.15, o: [17.5, 15] }],
  ],
});
