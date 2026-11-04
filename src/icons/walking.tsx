import { createIcon } from "../runtime/createIcon.js";

export const Walking = createIcon("Walking", "walking", {
  nodes: [
    ["circle", { cx: "13", cy: "4", r: "1" }, { r: "float", a: 0.8, o: [12, 10] }],
    ["path", { d: "m12.5 8-1 6" }, { r: "float", a: 0.8, o: [12, 10] }],
    ["path", { d: "m11.5 14-3 7" }, { r: "swing", d: 0.05, a: -12, o: [11.5, 14] }],
    ["path", { d: "m11.5 14 2.5 3.5.5 3.5" }, { r: "swing", d: 0.05, a: 12, o: [11.5, 14] }],
    ["path", { d: "m9 13 .5-3.5 3-1.5 3 3.5" }, { r: "swing", d: 0.1, a: 8, o: [12.5, 8] }],
  ],
});
