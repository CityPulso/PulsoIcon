import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "briefcase-metal" (MIT, Copyright (c) 2023 Phosphor Icons).

export const BriefcaseMetal = createIcon("BriefcaseMetal", "briefcase-metal", {
  nodes: [
    ["path", { d: "M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" }, { r: "lift", o: [12, 4.5] }],
    ["rect", { x: "2", y: "6", width: "20", height: "14", rx: "2" }, { r: "press", a: 0.05, o: [12, 13] }],
    ["path", { d: "M2 11h20" }, { r: "growX", d: 0.1, o: [2, 11] }],
    ["path", { d: "M2 15h20" }, { r: "growX", d: 0.18, o: [2, 15] }],
  ],
});
