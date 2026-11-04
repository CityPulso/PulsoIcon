import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "khronosgroup" (CC0-1.0). Khronos Group is a trademark of its owner.
export const BrandKhronosGroup = createIcon("BrandKhronosGroup", "brand-khronos-group", {
  nodes: [
    ["path", { d: "M3 7v10" }, { r: "draw" }],
    ["path", { d: "M9.5 7 3.5 12l6 5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M20.8 9.2a5 5 0 1 1-2.3-1.9" }, { r: "spin", d: 0.15, a: 360, o: [16.5, 12] }],
    ["path", { d: "M12.5 12h8" }, { r: "draw", d: 0.2 }],
  ],
});
