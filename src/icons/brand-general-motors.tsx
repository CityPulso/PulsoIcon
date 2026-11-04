import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "generalmotors" (CC0-1.0). General Motors is a trademark of its owner.
export const BrandGeneralMotors = createIcon("BrandGeneralMotors", "brand-general-motors", {
  nodes: [
    ["rect", { x: "2", y: "2", width: "20", height: "20", rx: "4" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M10.5 8H8.5a2 2 0 0 0 0 4h2M10.5 8v6.5a2 2 0 0 1-2 2H7" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M12.5 13V9.5a1.5 1.5 0 0 1 1.5-1.5h2.5a1.5 1.5 0 0 1 1.5 1.5V13M15.25 8v5" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M12.5 16.5H18" }, { r: "growX", d: 0.3, o: [12.5, 16.5] }],
  ],
});
