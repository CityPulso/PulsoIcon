import { createIcon } from "../runtime/createIcon.js";

export const Letters = createIcon("Letters", "letters", {
  nodes: [
    ["path", { d: "M15 8H9" }, { r: "drop", a: 3, o: [12, 5.999] }],
    ["path", { d: "M21 15.354a4 4 0 100 5.292" }, { r: "drop", d: 0.24, a: 3, o: [17.5, 18] }],
    ["path", { d: "M3 18h4a2 2 0 010 4H3.5a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5H6a2 2 0 010 4" }, { r: "drop", d: 0.12, a: 3, o: [6, 18] }],
    ["path", { d: "m8 10 3.453-7.648a.6.6 0 011.094 0L16 10" }, { r: "drop", a: 3, o: [12, 5.999] }],
  ],
});
