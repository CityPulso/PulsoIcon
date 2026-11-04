import { createIcon } from "../runtime/createIcon.js";

export const Farm = createIcon("Farm", "farm", {
  nodes: [
    ["path", { d: "M4 21V11l2.5-4.5L12 3l5.5 3.5L20 11v10" }, { r: "press", a: 0.04, o: [12, 21] }],
    ["path", { d: "M2 21h20" }, { r: "growX", o: [12, 21] }],
    ["path", { d: "M9 21v-6h6v6" }, { r: "fade", o: [12, 18] }],
    ["path", { d: "m9 15 6 6m0-6-6 6" }, { r: "draw", d: 0.1, o: [12, 18] }],
    ["path", { d: "M11 9.5h2" }, { r: "pop", d: 0.2, o: [12, 9.5] }],
  ],
});
