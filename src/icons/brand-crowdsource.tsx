import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "crowdsource" (CC0-1.0). Crowdsource is a trademark of its owner.
export const BrandCrowdsource = createIcon("BrandCrowdsource", "brand-crowdsource", {
  nodes: [
    ["path", { d: "M3 9c0 6 3.5 11 9 11s9-5 9-11" }, { r: "press", a: 0.05, o: [12, 20] }],
    ["path", { d: "M9 20v-1a3 3 0 0 1 6 0v1" }, { r: "press", a: 0.05, o: [12, 20] }],
    ["circle", { cx: "12", cy: "11.5", r: "1.5" }, { r: "float", d: 0.15 }],
    ["circle", { cx: "7.5", cy: "7", r: "1.5" }, { r: "float", d: 0.05 }],
    ["circle", { cx: "16.5", cy: "7", r: "1.5" }, { r: "float", d: 0.1 }],
    ["circle", { cx: "12", cy: "3.5", r: "1.5" }, { r: "float" }],
  ],
});
