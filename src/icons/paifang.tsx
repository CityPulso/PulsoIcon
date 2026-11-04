import { createIcon } from "../runtime/createIcon.js";

export const Paifang = createIcon("Paifang", "paifang", {
  nodes: [
    ["path", { d: "M2 6c2 1 4 1.5 6 1.5h8c2 0 4-.5 6-1.5" }, { r: "draw" }],
    ["path", { d: "M7 7.5 8.5 3h7L17 7.5" }, { r: "drop", a: 2, o: [12, 5] }],
    ["path", { d: "M6 8v13" }, { r: "grow", d: 0.05, o: [6, 21] }],
    ["path", { d: "M18 8v13" }, { r: "grow", d: 0.05, o: [18, 21] }],
    ["path", { d: "M4 12h16" }, { r: "growX", d: 0.15, o: [12, 12] }],
    ["path", { d: "M12 7.5V12" }, { r: "grow", d: 0.25, o: [12, 12] }],
  ],
});
