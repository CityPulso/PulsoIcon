import { icon } from "../icon.js";

// Drawn after Simple Icons "unitedairlines" (CC0-1.0). United Airlines is a trademark of its owner.

export const BrandUnitedAirlines = icon("BrandUnitedAirlines", "brand-united-airlines", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.03, o: [12, 12] }],
    ["path", { d: "M12 2a5 10 0 0 0 0 20a5 10 0 0 0 0-20" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M2.5 9h19M2.5 15h19" }, { r: "pulse", o: [12, 12] }],
  ],
});
