import { createIcon } from "../runtime/createIcon.js";

export const Tent = createIcon("Tent", "tent", {
  nodes: [
    ["path", { d: "M3.5 21 14 3" }, { r: "jelly", a: 0.06, o: [12, 21] }],
    ["path", { d: "M20.5 21 10 3" }, { r: "jelly", a: 0.06, o: [12, 21] }],
    ["path", { d: "M15.5 21 12 15l-3.5 6" }, { r: "jelly", a: 0.06, o: [12, 21] }],
    ["path", { d: "M2 21h20" }, { r: "growX", o: [12, 21] }],
  ],
});
