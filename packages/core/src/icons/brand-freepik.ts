import { icon } from "../icon.js";

// Drawn after Simple Icons "freepik" (CC0-1.0). Freepik is a trademark of its owner.
export const BrandFreepik = icon("BrandFreepik", "brand-freepik", {
  nodes: [
    ["circle", { cx: "12", cy: "14", r: "7" }, { r: "press", a: 0.04, o: [12, 14] }],
    ["path", { d: "M12 7V5" }, { r: "wobble", a: 15, o: [12, 7] }],
    ["circle", { cx: "12", cy: "3.5", r: "1.5" }, { r: "wobble", a: 15, o: [12, 7] }],
    ["path", { d: "M5.5 11 3 9" }, { r: "ring", d: 0.1, a: 15, o: [5.5, 11] }],
    ["path", { d: "M18.5 11 21 9" }, { r: "ring", d: 0.1, a: 15, o: [18.5, 11] }],
    ["path", { d: "M9 13.5v1M15 13.5v1" }, { r: "blink", d: 0.2, o: [12, 14] }],
  ],
});
