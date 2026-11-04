import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "toggltrack" (CC0-1.0). Toggl Track is a trademark of its owner.

export const BrandTogglTrack = createIcon("BrandTogglTrack", "brand-toggl-track", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M12 6v6" }, { r: "press", a: 0.15, o: [12, 6] }],
    ["path", { d: "M8.5 8.5a5 5 0 1 0 7 0" }, { r: "draw", d: 0.08 }],
  ],
});
