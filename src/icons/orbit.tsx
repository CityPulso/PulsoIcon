import { createIcon } from "../runtime/createIcon.js";

export const Orbit = createIcon("Orbit", "orbit", {
  nodes: [
    ["path", { d: "M20.341 6.484A10 10 0 0 1 10.266 21.85" }, { r: "spin", a: 180, o: [12, 12] }],
    ["path", { d: "M3.659 17.516A10 10 0 0 1 13.74 2.152" }, { r: "spin", a: 180, o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "3" }, { r: "pulse", a: 0.15, o: [12, 12] }],
    ["circle", { cx: "19", cy: "5", r: "2" }, { r: "spin", a: 180, o: [12, 12] }],
    ["circle", { cx: "5", cy: "19", r: "2" }, { r: "spin", a: 180, o: [12, 12] }],
  ],
});
