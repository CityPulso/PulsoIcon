import { createIcon } from "../runtime/createIcon.js";

export const LaptopMinimalCheck = createIcon("LaptopMinimalCheck", "laptop-minimal-check", {
  nodes: [
    ["path", { d: "M2 20h20" }, { r: "growX", d: 0.1, o: [12, 20] }],
    ["path", { d: "m9 10 2 2 4-4" }, { r: "draw", d: 0.2, o: [12, 10] }],
    ["rect", { x: "3", y: "4", width: "18", height: "12", rx: "2" }, { r: "fold", o: [12, 16] }],
  ],
});
