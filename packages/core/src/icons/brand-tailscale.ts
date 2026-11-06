import { icon } from "../icon.js";

// Drawn after Simple Icons "tailscale" (CC0-1.0). Tailscale is a trademark of its owner.
export const BrandTailscale = icon("BrandTailscale", "brand-tailscale", {
  nodes: [
    ["circle", { cx: "5", cy: "5", r: "2.5" }],
    ["circle", { cx: "5", cy: "12", r: "1" }, { r: "pulse", d: 0.06, o: [5, 12] }],
    ["circle", { cx: "5", cy: "19", r: "2.5" }],
    ["circle", { cx: "12", cy: "5", r: "2.5" }],
    ["circle", { cx: "12", cy: "12", r: "1" }, { r: "pulse", d: 0.12, o: [12, 12] }],
    ["circle", { cx: "12", cy: "19", r: "1" }, { r: "pulse", d: 0.18, o: [12, 19] }],
    ["circle", { cx: "19", cy: "5", r: "2.5" }],
    ["circle", { cx: "19", cy: "12", r: "1" }, { r: "pulse", d: 0.18, o: [19, 12] }],
    ["circle", { cx: "19", cy: "19", r: "2.5" }],
  ],
});
