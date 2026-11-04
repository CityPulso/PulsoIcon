import { createIcon } from "../runtime/createIcon.js";

export const Chimney = createIcon("Chimney", "chimney", {
  nodes: [
    ["path", { d: "M2 15 12 7l10 8" }, { r: "press", a: 0.04, o: [12, 21] }],
    ["path", { d: "M15 9.4V4.5h3v7.3" }, { r: "press", a: 0.04, o: [12, 21] }],
    ["path", { d: "M4 13.4V21h16v-7.6" }, { r: "press", a: 0.04, o: [12, 21] }],
    ["path", { d: "M15.5 2.5c.7 0 .7-1 1.5-1s.8 1 1.5 1" }, { r: "rise", a: 2, d: 0.1, o: [17, 2] }],
  ],
});
