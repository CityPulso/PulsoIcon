import { icon } from "../icon.js";

// Drawn after Simple Icons "aboutdotme" (CC0-1.0). about.me is a trademark of its owner.
export const BrandAboutMe = icon("BrandAboutMe", "brand-about-me", {
  nodes: [
    ["circle", { cx: "4", cy: "14", r: "2" }, { r: "draw" }],
    ["path", { d: "M6 12v4" }, { r: "draw", d: 0.08 }],
    ["path", { d: "M8.5 16h.01" }, { r: "pop", d: 0.15, o: [8.5, 16] }],
    ["path", { d: "M11 16v-4 M11 13.25a1.25 1.25 0 0 1 2.5 0V16 M13.5 13.25a1.25 1.25 0 0 1 2.5 0V16" }, { r: "draw", d: 0.22 }],
    ["path", { d: "M17.5 14h4a2 2 0 1 0-.6 1.4" }, { r: "draw", d: 0.35 }],
  ],
});
