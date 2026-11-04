import { createIcon } from "../runtime/createIcon.js";

export const Pill = createIcon("Pill", "pill", {
  nodes: [
    ["path", { d: "m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" }, { r: "spin", a: 180, o: [12, 12] }],
    ["path", { d: "m8.5 8.5 7 7" }, { r: "spin", a: 180, o: [12, 12] }],
  ],
});
