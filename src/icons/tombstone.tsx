import { createIcon } from "../runtime/createIcon.js";

export const Tombstone = createIcon("Tombstone", "tombstone", {
  nodes: [
    ["path", { d: "M11 10h2" }, { r: "growX", d: 0.05, o: [12, 10] }],
    ["path", { d: "M19 21V10a7 7 0 00-14 0v11" }, { r: "wobble", a: 4, o: [12, 21] }],
    ["path", { d: "M2 21h20" }, { r: "growX", o: [12, 21] }],
    ["path", { d: "M9 14h6" }, { r: "growX", d: 0.11, o: [12, 14] }],
  ],
});
