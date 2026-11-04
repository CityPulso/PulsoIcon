import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "audioboom" (CC0-1.0). Audioboom is a trademark of its owner.
export const BrandAudioboom = createIcon("BrandAudioboom", "brand-audioboom", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M8 7.5v9" }, { r: "grow", o: [8, 12] }],
    ["path", { d: "M11.5 8.5v2 M11.5 13.5v2" }, { r: "grow", o: [11.5, 12], d: 0.1 }],
    ["path", { d: "M15 10.5v3" }, { r: "grow", o: [15, 12], d: 0.2 }],
    ["path", { d: "M18 12h.01" }, { r: "pop", d: 0.3, o: [18, 12] }],
  ],
});
