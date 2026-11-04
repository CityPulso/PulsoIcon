import { createIcon } from "../runtime/createIcon.js";

export const CloudWind = createIcon("CloudWind", "cloud-wind", {
  nodes: [
    ["path", { d: "M15.5 12H8.5a4.5 4.5 0 1 1 3.9-6.75h3.1a3.375 3.375 0 0 1 0 6.75z" }, { r: "float", a: 1, o: [12, 8] }],
    ["path", { d: "M3 20h13a2 2 0 1 0-2-2" }, { r: "slide", d: 0.05, x: 1, a: 1.5, o: [10, 19] }],
    ["path", { d: "M5 16h7" }, { r: "slide", d: 0.15, x: 1, a: 1.5, o: [8.5, 16] }],
  ],
});
