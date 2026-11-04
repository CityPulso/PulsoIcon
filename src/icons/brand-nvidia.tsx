import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "nvidia" (CC0-1.0). NVIDIA is a trademark of its owner.
export const BrandNvidia = createIcon("BrandNvidia", "brand-nvidia", {
  nodes: [
    ["path", { d: "M12 5.5h9v13h-9" }, { r: "press", a: 0.05, o: [16.5, 12] }],
    ["path", { d: "M12 5.5C7 5.5 3.5 8.5 2 12c1.5 3.5 5 6.5 10 6.5" }, { r: "draw", o: [7, 12] }],
    ["path", { d: "M12 9c-2.5 0-4.5 1.3-5.5 3 1 1.7 3 3 5.5 3" }, { r: "draw", d: 0.15, o: [9, 12] }],
    ["path", { d: "M12 8.5c3 0 5 1.5 6 3.5-1.5 2.5-3.5 4-6 4" }, { r: "draw", d: 0.3, o: [15, 12] }],
  ],
});
