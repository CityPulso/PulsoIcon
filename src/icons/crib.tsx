import { createIcon } from "../runtime/createIcon.js";

export const Crib = createIcon("Crib", "crib", {
  nodes: [
    ["path", { d: "M3 4v17" }, { r: "ring", a: 4, o: [12, 21] }],
    ["path", { d: "M21 4v17" }, { r: "ring", a: 4, o: [12, 21] }],
    ["path", { d: "M3 7h18M3 17h18" }, { r: "ring", a: 4, o: [12, 21] }],
    ["path", { d: "M7.5 7v10M12 7v10M16.5 7v10" }, { r: "ring", a: 4, o: [12, 21] }],
  ],
});
