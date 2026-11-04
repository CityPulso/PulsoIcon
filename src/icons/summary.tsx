import { createIcon } from "../runtime/createIcon.js";

export const Summary = createIcon("Summary", "summary", {
  nodes: [
    ["path", { d: "M15 4H7" }, { r: "growX", d: 0.05, o: [7, 4] }],
    ["path", { d: "m18 16 3 3-3 3" }, { r: "slide", d: 0.2, y: 1, a: 1, o: [19.5, 19] }],
    ["path", { d: "M3 4v13a2 2 0 0 0 2 2h16" }, { r: "press", a: 0.04, o: [12, 11.5] }],
    ["path", { d: "M7 14h7" }, { r: "growX", d: 0.15, o: [7, 14] }],
    ["path", { d: "M7 9h12" }, { r: "growX", d: 0.1, o: [7, 9] }],
  ],
});
