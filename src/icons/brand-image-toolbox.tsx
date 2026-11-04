import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "imagetoolbox" (CC0-1.0). Image Toolbox is a trademark of its owner.

export const BrandImageToolbox = createIcon("BrandImageToolbox", "brand-image-toolbox", {
  nodes: [
    ["path", { d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["circle", { cx: "8.5", cy: "8.5", r: "1.5" }, { r: "rise", d: 0.1, o: [8.5, 8.5] }],
    ["path", { d: "M3 17.5c3-3 6-3 9 0s6 2.5 9-.5" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M20.3 2.7a1.5 1.5 0 0 1 2.1 2.1L17 10.2l-3 .8.8-3z" }, { r: "tilt", d: 0.1, o: [15, 10] }],
  ],
});
