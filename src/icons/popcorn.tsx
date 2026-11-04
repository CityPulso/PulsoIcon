import { createIcon } from "../runtime/createIcon.js";

export const Popcorn = createIcon("Popcorn", "popcorn", {
  nodes: [
    ["path", { d: "M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4" }, { r: "jelly", a: 0.1, o: [12, 8] }],
    ["path", { d: "M10 22 9 8" }, { r: "press", d: 0.05, a: 0.04, o: [12, 22] }],
    ["path", { d: "m14 22 1-14" }, { r: "press", d: 0.05, a: 0.04, o: [12, 22] }],
    ["path", { d: "M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z" }, { r: "press", d: 0.05, a: 0.04, o: [12, 22] }],
  ],
});
