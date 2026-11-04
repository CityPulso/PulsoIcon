import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "beatstars" (CC0-1.0). BeatStars is a trademark of its owner.
export const BrandBeatstars = createIcon("BrandBeatstars", "brand-beatstars", {
  nodes: [
    ["path", { d: "M3 3h13l2.5 2.5v4.5L16 12l2.5 2v4.5L16 21H3z" }, { r: "press", a: 0.04, o: [12, 21] }],
    ["polygon", { points: "10 8.3 11 10.92 13.8 11.06 11.62 12.83 12.35 15.54 10 14 7.65 15.54 8.38 12.83 6.2 11.06 9 10.92" }, { r: "twinkle", d: 0.1, o: [10, 12] }],
  ],
});
