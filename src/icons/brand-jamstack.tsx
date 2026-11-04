import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "jamstack" (CC0-1.0). Jamstack is a trademark of its owner.
export const BrandJamstack = createIcon("BrandJamstack", "brand-jamstack", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M12 2v10h10" }, { r: "draw", d: 0.1 }],
    ["rect", { x: "14.5", y: "4.5", width: "5", height: "5", rx: "0.5" }, { r: "pop", d: 0.2, o: [17, 7] }],
  ],
});
