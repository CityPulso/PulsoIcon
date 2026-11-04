import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "podcastaddict" (CC0-1.0). Podcast Addict is a trademark of its owner.

export const BrandPodcastAddict = createIcon("BrandPodcastAddict", "brand-podcast-addict", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "4" }],
    ["path", { d: "M17 17.5v-5.5a5 5 0 1 0-5 5" }, { r: "draw" }],
    ["path", { d: "M12 12.5h.01" }, { r: "pop", d: 0.2, o: [12, 12.5] }],
    ["path", { d: "M10 10.5a2.8 2.8 0 0 1 4 0" }, { r: "pulse", d: 0.3, o: [12, 11] }],
  ],
});
