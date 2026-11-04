import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "audiotechnica" (CC0-1.0). Audio-Technica is a trademark of its owner.
export const BrandAudioTechnica = createIcon("BrandAudioTechnica", "brand-audio-technica", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M7.5 17.5 11 6l5.5 11.5Z" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M11 17.5l2.2-6" }, { r: "draw", d: 0.35 }],
  ],
});
