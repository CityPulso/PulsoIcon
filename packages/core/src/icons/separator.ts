import { icon } from "../icon.js";

// Adapted from Tabler Icons "separator" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Separator = icon("Separator", "separator", {
  nodes: [
    ["path", { d: "M3 12l0 .01" }, { r: "pop", o: [3, 12] }],
    ["path", { d: "M7 12l10 0" }, { r: "growX", d: 0.1, o: [12, 12] }],
    ["path", { d: "M21 12l0 .01" }, { r: "pop", d: 0.2, o: [21, 12] }],
  ],
});
