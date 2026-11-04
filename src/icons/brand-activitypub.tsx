import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "activitypub" (CC0-1.0). ActivityPub is a trademark of its owner.
export const BrandActivitypub = createIcon("BrandActivitypub", "brand-activitypub", {
  nodes: [
    ["path", { d: "M2 12l8.5-5v12.5" }, { r: "draw" }],
    ["polygon", { points: "7 13 3.5 15 7 17" }, { r: "pop", d: 0.15, o: [5, 15] }],
    ["path", { d: "M13.5 5.5L22 11v2l-8.5 5.5" }, { r: "draw", d: 0.1 }],
    ["polygon", { points: "13.5 10 16.5 12 13.5 14" }, { r: "pop", d: 0.25, o: [15, 12] }],
  ],
});
