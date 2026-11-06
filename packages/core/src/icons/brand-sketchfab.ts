import { icon } from "../icon.js";

// Drawn after Simple Icons "sketchfab" (CC0-1.0). Sketchfab is a trademark of its owner.
export const BrandSketchfab = icon("BrandSketchfab", "brand-sketchfab", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M12 6.5l5 2.75v5.5L12 17.5l-5-2.75v-5.5z" }, { r: "turn", a: 20, o: [12, 12] }],
    ["path", { d: "M7 9.25 12 12l5-2.75" }, { r: "turn", a: 20, o: [12, 12] }],
    ["path", { d: "M12 12v5.5" }, { r: "turn", a: 20, o: [12, 12] }],
  ],
});
