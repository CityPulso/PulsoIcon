import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "fineco" (CC0-1.0). Fineco is a trademark of its owner.
export const BrandFineco = createIcon("BrandFineco", "brand-fineco", {
  nodes: [
    ["rect", { x: "2", y: "6.5", width: "20", height: "11", rx: "2.5" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M7 15V9.5h2.5M7 12.25h2" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M12 9.5V15" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M14.5 15V9.5l3 5.5V9.5" }, { r: "draw", d: 0.25 }],
  ],
});
