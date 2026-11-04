import { createIcon } from "../runtime/createIcon.js";

export const Plus = createIcon("Plus", "plus", {
  nodes: [
    ["path", { d: "M5 12h14" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M12 5v14" }, { r: "spin", a: 90, o: [12, 12] }],
  ],
});
