import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "protractor" (CC0-1.0). Protractor is a trademark of its owner.
export const BrandProtractor = createIcon("BrandProtractor", "brand-protractor", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M5.5 15.5a6.5 6.5 0 0 1 13 0z" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M12 15.5l2.5-4" }, { r: "turn", d: 0.2, a: -70, o: [12, 15.5] }],
  ],
});
