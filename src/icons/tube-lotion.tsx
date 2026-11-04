import { createIcon } from "../runtime/createIcon.js";

export const TubeLotion = createIcon("TubeLotion", "tube-lotion", {
  nodes: [
    ["path", { d: "M15 18v3a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-3" }, { r: "press", d: 0.1, a: 0.06, o: [12, 20] }],
    ["path", { d: "M17 2a2 2 0 0 1 1.6 3.2A8 8 0 0 0 17 10v6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-6a8 8 0 0 0-1.6-4.8A2 2 0 0 1 7 2z" }, { r: "jelly", a: 0.1, o: [12, 18] }],
    ["path", { d: "M7 10a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0" }, { r: "growX", d: 0.05, o: [12, 10] }],
  ],
});
