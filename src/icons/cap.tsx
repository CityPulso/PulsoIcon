import { createIcon } from "../runtime/createIcon.js";

export const Cap = createIcon("Cap", "cap", {
  nodes: [
    ["path", { d: "M2 17a8 8 0 0 1 16 0z" }, { r: "lift", a: -6, o: [12, 17] }],
    ["path", { d: "M18 17h3a1 1 0 0 0 .8-1.6 7 7 0 0 0-4.3-2.6" }, { r: "lift", a: -6, o: [12, 17] }],
    ["path", { d: "M10 9V7.5" }, { r: "lift", a: -6, o: [12, 17] }],
    ["path", { d: "M10 9c-1.5 2-2 5-2 8" }, { r: "lift", a: -6, o: [12, 17] }],
  ],
});
