import { createIcon } from "../runtime/createIcon.js";

export const ArrowUpFromLine = createIcon("ArrowUpFromLine", "arrow-up-from-line", {
  nodes: [
    ["path", { d: "m18 9-6-6-6 6" }, { r: "shoot", y: -1, a: 5, o: [12, 10] }],
    ["path", { d: "M12 3v14" }, { r: "shoot", y: -1, a: 5, o: [12, 10] }],
    ["path", { d: "M5 21h14" }, { r: "growX", o: [12, 21] }],
  ],
});
