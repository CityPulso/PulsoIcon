import { icon } from "../icon.js";

// Drawn after Simple Icons "pcgamingwiki" (CC0-1.0). PCGamingWiki is a trademark of its owner.
export const BrandPcgamingwiki = icon("BrandPcgamingwiki", "brand-pcgamingwiki", {
  nodes: [
    ["path", { d: "M5 4.5 19 2.5v19L5 19.5z" }],
    ["path", { d: "M13 3.6v17" }],
    ["path", { d: "M7.5 8h3M7.5 12h3" }, { r: "draw", d: 0.1, o: [9, 10] }],
    ["circle", { cx: "16", cy: "8.5", r: "1.25" }, { r: "flicker", d: 0.2, o: [16, 8.5] }],
    ["path", { d: "M16 13.5v4" }, { r: "grow", d: 0.25, o: [16, 17.5] }],
  ],
});
