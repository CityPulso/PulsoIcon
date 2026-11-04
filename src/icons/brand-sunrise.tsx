import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "sunrise" (CC0-1.0). Sunrise is a trademark of its owner.
export const BrandSunrise = createIcon("BrandSunrise", "brand-sunrise", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M2.5 15h19" }, { r: "drawOut", d: 0.1 }],
    ["path", { d: "M6 18.5h12" }, { r: "drawOut", d: 0.2 }],
  ],
});
