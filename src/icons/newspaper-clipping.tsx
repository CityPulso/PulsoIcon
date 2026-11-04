import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "newspaper-clipping" (MIT, Copyright (c) 2023 Phosphor Icons).

export const NewspaperClipping = createIcon("NewspaperClipping", "newspaper-clipping", {
  nodes: [
    ["path", { d: "M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v15l-3-1.5-3 1.5-3-1.5-3 1.5-3-1.5-3 1.5z" }, { r: "swing", a: 5, o: [12, 3] }],
    ["rect", { x: "6", y: "7", width: "5", height: "5", rx: "1" }, { r: "pop", d: 0.1, o: [8.5, 9.5] }],
    ["path", { d: "M14 8h4" }, { r: "growX", d: 0.15, o: [14, 8] }],
    ["path", { d: "M14 11h4" }, { r: "growX", d: 0.2, o: [14, 11] }],
    ["path", { d: "M6 15h12" }, { r: "growX", d: 0.25, o: [6, 15] }],
  ],
});
