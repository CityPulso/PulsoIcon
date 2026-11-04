import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "steamworks" (CC0-1.0). Steamworks is a trademark of its owner.
export const BrandSteamworks = createIcon("BrandSteamworks", "brand-steamworks", {
  nodes: [
    ["path", { d: "M12 6.5h-4a2.75 2.75 0 0 0 0 5.5h2a2.75 2.75 0 0 1 0 5.5H5" }, { r: "draw" }],
    ["path", { d: "M16 15h.01" }, { r: "pop", d: 0.2, o: [16, 15] }],
    ["path", { d: "M18.5 12h.01" }, { r: "pop", d: 0.3, o: [18.5, 12] }],
    ["path", { d: "M21 9h.01" }, { r: "pop", d: 0.4, o: [21, 9] }],
    ["path", { d: "M18.5 6h.01" }, { r: "pop", d: 0.5, o: [18.5, 6] }],
  ],
});
