import { createIcon } from "../runtime/createIcon.js";

export const Dot = createIcon("Dot", "dot", {
  nodes: [["circle", { cx: "12", cy: "12", r: "1" }, { r: "beat", a: 0.5, o: [12, 12] }]],
});
