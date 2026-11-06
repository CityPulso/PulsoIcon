import { icon } from "../icon.js";

// Adapted from Tabler Icons "text-caption" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TextCaption = icon("TextCaption", "text-caption", {
  text: true,
  nodes: [
    ["path", { d: "M4 15h16" }, { r: "growX", d: 0.15, o: [4, 15] }],
    ["path", { d: "M4 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4" }, { r: "pop", o: [7, 7] }],
    ["path", { d: "M4 20h12" }, { r: "growX", d: 0.25, o: [4, 20] }],
  ],
});
