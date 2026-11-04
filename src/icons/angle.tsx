import { createIcon } from "../runtime/createIcon.js";

export const Angle = createIcon("Angle", "angle", {
  nodes: [
    ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }, { r: "pulse", a: 0.04, o: [12, 12] }],
    ["path", { d: "M3 11a10 10 0 0 1 10 10" }, { r: "draw", o: [8, 16] }],
  ],
});
