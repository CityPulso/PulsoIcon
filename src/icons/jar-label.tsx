import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "jar-label" (MIT, Copyright (c) 2023 Phosphor Icons).
export const JarLabel = createIcon("JarLabel", "jar-label", {
  nodes: [
    ["rect", { x: "7", y: "2", width: "10", height: "4", rx: "1" }, { r: "lift", a: 8, o: [12, 4] }],
    ["path", { d: "M8 6c-2 .7-3 2-3 4v9a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-9c0-2-1-3.3-3-4" }, { r: "jelly", d: 0.1, a: 0.04, o: [12, 22] }],
    ["path", { d: "M5 11h14" }, { r: "growX", d: 0.2, o: [5, 11] }],
    ["path", { d: "M5 18h14" }, { r: "growX", d: 0.26, o: [5, 18] }],
  ],
});
