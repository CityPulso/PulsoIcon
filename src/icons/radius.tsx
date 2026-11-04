import { createIcon } from "../runtime/createIcon.js";

export const Radius = createIcon("Radius", "radius", {
  nodes: [
    ["path", { d: "M20.34 17.52a10 10 0 1 0-2.82 2.82" }, { r: "spin", a: -90, o: [12, 12] }],
    ["circle", { cx: "19", cy: "19", r: "2" }, { r: "pop", d: 0.15, o: [19, 19] }],
    ["path", { d: "m13.41 13.41 4.18 4.18" }, { r: "growX", d: 0.05, o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "2" }, { r: "pop", o: [12, 12] }],
  ],
});
