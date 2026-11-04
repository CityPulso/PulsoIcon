import { createIcon } from "../runtime/createIcon.js";

export const CircleSmall = createIcon("CircleSmall", "circle-small", {
  nodes: [["circle", { cx: "12", cy: "12", r: "6" }, { r: "pulse", a: 0.25, o: [12, 12] }]],
});
