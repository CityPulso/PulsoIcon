import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "crewunited" (CC0-1.0). Crew United is a trademark of its owner.
export const BrandCrewUnited = createIcon("BrandCrewUnited", "brand-crew-united", {
  nodes: [
    ["circle", { cx: "6.5", cy: "15", r: "4.5" }],
    ["path", { d: "M11 15a5 5 0 1 0 2.5-6.5L11 5.5" }, { r: "draw", d: 0.05 }],
    ["circle", { cx: "16", cy: "13", r: "1.5" }, { r: "pop", d: 0.2, o: [16, 13] }],
  ],
});
