import { icon } from "../icon.js";

// Drawn after Simple Icons "retropie" (CC0-1.0). RetroPie is a trademark of its owner.

export const BrandRetropie = icon("BrandRetropie", "brand-retropie", {
  nodes: [
    ["path", { d: "M4 14h16l-2 6.5H6z" }, { r: "press", a: 0.05, o: [12, 20] }],
    ["path", { d: "M12 14V8" }, { r: "tilt", a: 15, o: [12, 14] }],
    ["circle", { cx: "12", cy: "5.5", r: "2.5" }, { r: "tilt", a: 15, o: [12, 14] }],
    ["path", { d: "M16 11.5h1.5" }, { r: "pop", d: 0.2, o: [16.75, 11.5] }],
  ],
});
