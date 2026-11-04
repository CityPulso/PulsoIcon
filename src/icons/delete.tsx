import { createIcon } from "../runtime/createIcon.js";

export const Delete = createIcon("Delete", "delete", {
  nodes: [
    ["path", { d: "M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z" }, { r: "shake", a: 1, o: [12, 12] }],
    ["path", { d: "m12 9 6 6" }, { r: "draw", d: 0.1, o: [15, 12] }],
    ["path", { d: "m18 9-6 6" }, { r: "draw", d: 0.2, o: [15, 12] }],
  ],
});
