import { createIcon } from "../runtime/createIcon.js";

export const Necklace = createIcon("Necklace", "necklace", {
  nodes: [
    ["path", { d: "M4 3a8 9 0 0 0 16 0" }, { r: "swing", a: 6, o: [12, 3] }],
    ["path", { d: "m12 12 3 4-3 5-3-5z" }, { r: "swing", a: 6, o: [12, 3] }],
  ],
});
