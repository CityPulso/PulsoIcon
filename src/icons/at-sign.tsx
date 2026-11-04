import { createIcon } from "../runtime/createIcon.js";

export const AtSign = createIcon("AtSign", "at-sign", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "4" }, { r: "pop", d: 0.1, o: [12, 12] }],
    ["path", { d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" }, { r: "spin", a: -360, o: [12, 12] }],
  ],
});
