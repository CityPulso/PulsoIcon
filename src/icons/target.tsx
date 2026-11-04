import { createIcon } from "../runtime/createIcon.js";

export const Target = createIcon("Target", "target", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "6" }, { r: "press", d: 0.06, a: 0.08, o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "2" }, { r: "pop", d: 0.12, a: 0.5, o: [12, 12] }],
  ],
});
