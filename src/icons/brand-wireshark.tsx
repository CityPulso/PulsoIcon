import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "wireshark" (CC0-1.0). Wireshark is a trademark of its owner.
export const BrandWireshark = createIcon("BrandWireshark", "brand-wireshark", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M3 16h18" }, { r: "draw", d: 0.05, o: [12, 16] }],
    ["path", { d: "M6.5 16c.5-5 4-9 10-10-2 2.5-3 6-3 10" }, { r: "slide", d: 0.1, x: 1, y: 0, a: 1.5, o: [11, 11] }],
  ],
});
