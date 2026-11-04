import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "play-bug" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PlayBug = createIcon("PlayBug", "play-bug", {
  nodes: [
    ["path", { d: "M3.5 18a2.5 3 0 1 0 5 0a2.5 3 0 1 0 -5 0" }, { r: "wobble", d: 0.15, o: [6, 18] }],
    ["path", { d: "M2 18h1.5" }, { r: "wobble", d: 0.15, o: [6, 18] }],
    ["path", { d: "M8.5 18h1.5" }, { r: "wobble", d: 0.15, o: [6, 18] }],
    ["path", { d: "M9.5 14.5l-1.5 1.5" }, { r: "wobble", d: 0.15, o: [6, 18] }],
    ["path", { d: "M2.5 14.5l1.5 1.5" }, { r: "wobble", d: 0.15, o: [6, 18] }],
    ["path", { d: "M2.5 21.5l1.5 -1.5" }, { r: "wobble", d: 0.15, o: [6, 18] }],
    ["path", { d: "M8 20l1.5 1.5" }, { r: "wobble", d: 0.15, o: [6, 18] }],
    ["path", { d: "M13 16l8 -5l-13 -8v8" }, { r: "press", d: 0, o: [13, 12] }],
  ],
});
