import { createIcon } from "../runtime/createIcon.js";

export const Undo = createIcon("Undo", "undo", {
  nodes: [
    ["path", { d: "M3 7v6h6" }, { r: "spin", a: -40, o: [12, 12] }],
    ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" }, { r: "spin", a: -40, o: [12, 12] }],
  ],
});
