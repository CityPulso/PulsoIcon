import { icon } from "../icon.js";

// Adapted from Tabler Icons "play-bugs" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PlayBugs = icon("PlayBugs", "play-bugs", {
  nodes: [
    ["path", { d: "M3.5 18a2.5 3 0 1 0 5 0a2.5 3 0 1 0 -5 0" }, { r: "wobble", d: 0.15, o: [6, 18] }],
    ["path", { d: "M2 17.5h1.5" }, { r: "wobble", d: 0.15, o: [6, 18] }],
    ["path", { d: "M8.5 17.5h1.5" }, { r: "wobble", d: 0.15, o: [6, 18] }],
    ["path", { d: "M9.5 14.5l-1.5 1.5" }, { r: "wobble", d: 0.15, o: [6, 18] }],
    ["path", { d: "M2.5 14.5l1.5 1.5" }, { r: "wobble", d: 0.15, o: [6, 18] }],
    ["path", { d: "M2.5 21.5l1.5 -1.5" }, { r: "wobble", d: 0.15, o: [6, 18] }],
    ["path", { d: "M8 20l1.5 1.5" }, { r: "wobble", d: 0.15, o: [6, 18] }],
    ["path", { d: "M15.5 16l6.5 -5l-11 -8" }, { r: "press", d: 0.05, o: [15, 12] }],
    ["path", { d: "M13 12.5l2 -1.5l-11 -8v8" }, { r: "press", d: 0, o: [9, 9] }],
  ],
});
