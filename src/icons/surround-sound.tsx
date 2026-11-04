import { createIcon } from "../runtime/createIcon.js";

export const SurroundSound = createIcon("SurroundSound", "surround-sound", {
  nodes: [
    ["rect", { x: "10", y: "7", width: "4", height: "10", rx: "1" }, { r: "beat", o: [12, 12] }],
    ["path", { d: "M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.4" }, { r: "slide", d: 0.05, x: -1, a: 1, o: [7, 12] }],
    ["path", { d: "M4.9 19.1C1 15.2 1 8.8 4.9 4.9" }, { r: "slide", d: 0.15, x: -1, a: 1, o: [3, 12] }],
    ["path", { d: "M16.2 7.8c2.3 2.3 2.3 6.1 0 8.4" }, { r: "slide", d: 0.05, x: 1, a: 1, o: [17, 12] }],
    ["path", { d: "M19.1 4.9C23 8.8 23 15.1 19.1 19" }, { r: "slide", d: 0.15, x: 1, a: 1, o: [21, 12] }],
  ],
});
