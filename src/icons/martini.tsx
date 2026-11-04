import { createIcon } from "../runtime/createIcon.js";

export const Martini = createIcon("Martini", "martini", {
  nodes: [
    ["path", { d: "M12 12 4.207 4.207A.707.707 0 0 1 4.707 3h14.586a.707.707 0 0 1 .5 1.207z" }, { r: "sway", a: 8, o: [12, 12] }],
    ["path", { d: "M12 12v10" }, { r: "grow", d: 0.1, o: [12, 22] }],
    ["path", { d: "M7 22h10" }, { r: "growX", d: 0.15, o: [12, 22] }],
  ],
});
