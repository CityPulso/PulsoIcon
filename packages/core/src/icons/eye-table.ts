import { icon } from "../icon.js";

// Adapted from Tabler Icons "eye-table" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const EyeTable = icon("EyeTable", "eye-table", {
  nodes: [
    ["path", { d: "M8 18h-.011" }, { r: "pop", o: [8, 18] }],
    ["path", { d: "M12 18h-.011" }, { r: "pop", d: 0.05, o: [12, 18] }],
    ["path", { d: "M16 18h-.011" }, { r: "pop", d: 0.1, o: [16, 18] }],
    ["path", { d: "M4 3h16" }],
    ["path", { d: "M5 3v17a1 1 0 0 0 1 1h12a1 1 0 0 0 1 -1v-17" }],
    ["path", { d: "M14 7h-4" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M9 15h1" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M14 15h1" }, { r: "draw", d: 0.3 }],
    ["path", { d: "M12 11v-4" }, { r: "draw", d: 0.15 }],
  ],
});
