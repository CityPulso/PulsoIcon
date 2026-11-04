import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "trophy-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TrophyOff = createIcon("TrophyOff", "trophy-off", {
  nodes: [
    ["path", { d: "M8 21h8" }, { r: "press", o: [12, 21] }],
    ["path", { d: "M12 17v4" }, { r: "press", o: [12, 21] }],
    ["path", { d: "M8 4h9" }, { r: "wobble", o: [12, 17] }],
    ["path", { d: "M17 4v8c0 .31 -.028 .612 -.082 .905m-1.384 2.632a5 5 0 0 1 -8.534 -3.537v-5" }, { r: "wobble", o: [12, 17] }],
    ["path", { d: "M3 9a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "wobble", o: [12, 17] }],
    ["path", { d: "M17 9a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "wobble", o: [12, 17] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
});
