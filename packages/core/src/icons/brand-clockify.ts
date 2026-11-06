import { icon } from "../icon.js";

// Drawn after Simple Icons "clockify" (CC0-1.0). Clockify is a trademark of its owner.

export const BrandClockify = icon("BrandClockify", "brand-clockify", {
  nodes: [
    ["path", { d: "M16.25 4.64A8.5 8.5 0 1 0 16.25 19.36" }],
    ["circle", { cx: "12", cy: "12", r: "1" }, { r: "pop", o: [12, 12] }],
    ["path", { d: "M14.5 9.5 19 5" }, { r: "turn", a: -30, d: 0.1, o: [12, 12] }],
    ["path", { d: "M14.5 14.5 19 19" }],
  ],
});
