import { createIcon } from "../runtime/createIcon.js";

export const Football = createIcon("Football", "football", {
  nodes: [
    ["path", { d: "M20 4C10.5 4 4 10.5 4 20c9.5 0 16-6.5 16-16Z" }, { r: "spin", a: 360, o: [12, 12] }],
    ["path", { d: "m9 15 6-6" }, { r: "spin", a: 360, o: [12, 12] }],
    ["path", { d: "m10 12 2 2" }, { r: "spin", a: 360, o: [12, 12] }],
    ["path", { d: "m12 10 2 2" }, { r: "spin", a: 360, o: [12, 12] }],
  ],
});
