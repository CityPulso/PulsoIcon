import { createIcon } from "../runtime/createIcon.js";

export const Bacteria = createIcon("Bacteria", "bacteria", {
  nodes: [
    ["path", { d: "M7.5 16.5a3.5 3.5 0 0 1 0-5l4-4a3.5 3.5 0 0 1 5 5l-4 4a3.5 3.5 0 0 1-5 0z" }, { r: "wobble", a: 8, o: [12, 12] }],
    ["path", { d: "M6 18c-.5 1.5-2 1-2.5 2.5" }, { r: "sway", d: 0.1, a: 15, o: [6, 18] }],
    ["path", { d: "M18 6c.5-1.5 2-1 2.5-2.5" }, { r: "sway", d: 0.1, a: 15, o: [18, 6] }],
    ["path", { d: "M10.5 13.5h.01" }, { r: "wobble", a: 8, o: [12, 12] }],
    ["path", { d: "M13.5 10.5h.01" }, { r: "wobble", a: 8, o: [12, 12] }],
  ],
});
