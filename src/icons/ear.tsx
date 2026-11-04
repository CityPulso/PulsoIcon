import { createIcon } from "../runtime/createIcon.js";

export const Ear = createIcon("Ear", "ear", {
  nodes: [
    ["path", { d: "M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0" }, { r: "wobble", a: 6, o: [12, 12] }],
    ["path", { d: "M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4" }, { r: "draw", d: 0.1, o: [12.5, 9.75] }],
  ],
});
