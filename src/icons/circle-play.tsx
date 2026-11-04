import { createIcon } from "../runtime/createIcon.js";

export const CirclePlay = createIcon("CirclePlay", "circle-play", {
  nodes: [
    ["path", { d: "M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z" }, { r: "pop", d: 0.1, a: 0.3, o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.05, o: [12, 12] }],
  ],
});
