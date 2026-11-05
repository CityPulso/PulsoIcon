import { createIcon } from "../runtime/createIcon.js";

export const Phi = createIcon("Phi", "phi", {
  text: true,
  nodes: [
    ["path", { d: "M12 2v20" }, { r: "grow", d: 0.1, o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "7" }, { r: "jelly", a: 0.15, o: [12, 12] }],
  ],
});
