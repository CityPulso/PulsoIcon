import { createIcon } from "../runtime/createIcon.js";

export const RockingChair = createIcon("RockingChair", "rocking-chair", {
  nodes: [
    ["path", { d: "m15 13 3.708 7.416" }, { r: "ring", a: 8, o: [12, 21] }],
    ["path", { d: "M3 19a15 15 0 0 0 18 0" }, { r: "ring", a: 8, o: [12, 21] }],
    ["path", { d: "m3 2 3.21 9.633A2 2 0 0 0 8.109 13H18" }, { r: "ring", a: 8, o: [12, 21] }],
    ["path", { d: "m9 13-3.708 7.416" }, { r: "ring", a: 8, o: [12, 21] }],
  ],
});
