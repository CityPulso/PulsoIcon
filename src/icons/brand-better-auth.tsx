import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "betterauth" (CC0-1.0). Better Auth is a trademark of its owner.
export const BrandBetterAuth = createIcon("BrandBetterAuth", "brand-better-auth", {
  nodes: [
    ["rect", { x: "3", y: "4", width: "4", height: "16", rx: "1" }],
    ["rect", { x: "13", y: "4", width: "8", height: "16", rx: "1" }],
    ["path", { d: "M7 12h6" }, { r: "draw", d: 0.1 }],
    ["rect", { x: "15.5", y: "9.5", width: "3", height: "5", rx: "0.5" }, { r: "pop", d: 0.2, o: [17, 12] }],
  ],
});
