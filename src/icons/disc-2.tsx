import { createIcon } from "../runtime/createIcon.js";

export const Disc2 = createIcon("Disc2", "disc-2", {
  svg: { r: "spin", a: 360 },
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["circle", { cx: "12", cy: "12", r: "4" }],
    ["path", { d: "M12 12h.01" }, { r: "pop", d: 0.2, o: [12.005, 12] }],
  ],
});
