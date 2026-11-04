import { createIcon } from "../runtime/createIcon.js";

export const Eject = createIcon("Eject", "eject", {
  nodes: [
    ["path", { d: "M4 13a1 1 0 0 1-.72-1.695l7.257-7.668a2 2 0 0 1 2.926 0l7.256 7.668A1 1 0 0 1 20 13z" }, { r: "bounce", y: -1, a: 2, o: [11.999, 8] }],
    ["rect", { x: "3", y: "17", width: "18", height: "4", rx: "1" }, { r: "press", d: 0.1, a: 0.06, o: [12, 19] }],
  ],
});
