import { createIcon } from "../runtime/createIcon.js";

export const Deer = createIcon("Deer", "deer", {
  nodes: [
    ["path", { d: "M9 10h6l-1 8a2 2 0 0 1-4 0Z" }, { r: "wobble", a: 4, o: [12, 20] }],
    ["path", { d: "M9 10.5c-1.5 1-4 .5-5-1 1.5-1 3.5-1 5 0" }, { r: "swing", d: 0.1, a: -12, o: [9, 10] }],
    ["path", { d: "M15 10.5c1.5 1 4 .5 5-1-1.5-1-3.5-1-5 0" }, { r: "swing", d: 0.1, a: 12, o: [15, 10] }],
    ["path", { d: "M10 10 8 6 5 4.5M8 6V2.5" }, { r: "wobble", a: 4, o: [12, 20] }],
    ["path", { d: "M14 10l2-4 3-1.5M16 6V2.5" }, { r: "wobble", a: 4, o: [12, 20] }],
    ["path", { d: "M10.5 13h.01" }, { r: "blink", d: 0.2, o: [12, 13] }],
    ["path", { d: "M13.5 13h.01" }, { r: "blink", d: 0.2, o: [12, 13] }],
  ],
});
