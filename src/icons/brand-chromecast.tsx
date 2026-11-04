import { createIcon } from "../runtime/createIcon.js";

export const BrandChromecast = createIcon("BrandChromecast", "brand-chromecast", {
  nodes: [
    ["path", { d: "M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M2 20h.01" }, { r: "pop", d: 0.05, o: [2, 20] }],
    ["path", { d: "M2 16a4 4 0 0 1 4 4" }, { r: "draw", d: 0.12, o: [4, 18] }],
    ["path", { d: "M2 12a8 8 0 0 1 8 8" }, { r: "draw", d: 0.19, o: [6, 16] }],
  ],
});
