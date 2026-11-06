import { icon } from "../icon.js";

// Drawn after Simple Icons "monica" (CC0-1.0). Monica is a trademark of its owner.
export const BrandMonica = icon("BrandMonica", "brand-monica", {
  nodes: [
    ["circle", { cx: "12", cy: "13.5", r: "8.5" }],
    ["path", { d: "M5 9a2.8 2.8 0 1 1 4-4" }, { r: "wobble", o: [6, 6] }],
    ["path", { d: "M15 5a2.8 2.8 0 1 1 4 4" }, { r: "wobble", o: [18, 6] }],
    ["circle", { cx: "8.75", cy: "13", r: "2" }, { r: "blink", o: [12, 13] }],
    ["circle", { cx: "15.25", cy: "13", r: "2" }, { r: "blink", o: [12, 13] }],
    ["path", { d: "M11 17.5h2" }],
  ],
});
