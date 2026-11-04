import { createIcon } from "../runtime/createIcon.js";

export const Menu = createIcon("Menu", "menu", {
  nodes: [
    ["path", { d: "M4 5h16" }, { r: "growX", o: [4, 5] }],
    ["path", { d: "M4 12h16" }, { r: "growX", d: 0.06, o: [4, 12] }],
    ["path", { d: "M4 19h16" }, { r: "growX", d: 0.12, o: [4, 19] }],
  ],
});
