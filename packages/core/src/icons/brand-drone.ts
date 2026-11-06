import { icon } from "../icon.js";

// Drawn after Simple Icons "drone" (CC0-1.0). Drone is a trademark of its owner.
export const BrandDrone = icon("BrandDrone", "brand-drone", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M2 12h7M15 12h7" }, { r: "growX", o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "3" }, { r: "pop", d: 0.15, o: [12, 12] }],
  ],
});
