import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "pocketcasts" (CC0-1.0). Pocket Casts is a trademark of its owner.

export const BrandPocketCasts = createIcon("BrandPocketCasts", "brand-pocket-casts", {
  nodes: [
    ["path", { d: "M12 22a10 10 0 1 1 10-10" }, { r: "draw" }],
    ["path", { d: "M12 18a6 6 0 1 1 6-6" }, { r: "turn", d: 0.1, a: -90, o: [12, 12] }],
    ["path", { d: "M12 14a2 2 0 1 1 2-2" }, { r: "turn", d: 0.2, a: 90, o: [12, 12] }],
  ],
});
