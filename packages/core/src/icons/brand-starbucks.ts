import { icon } from "../icon.js";

// Drawn after Simple Icons "starbucks" (CC0-1.0). Starbucks is a trademark of its owner.
export const BrandStarbucks = icon("BrandStarbucks", "brand-starbucks", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M12 4.8l.7 1.4 1.5.2-1.1 1.1.3 1.5-1.4-.7-1.4.7.3-1.5-1.1-1.1 1.5-.2z" }, { r: "twinkle", d: 0.1, o: [12, 6.5] }],
    ["circle", { cx: "12", cy: "12.5", r: "2" }, { r: "pop", d: 0.2, o: [12, 12.5] }],
    ["path", { d: "M9.5 11c-1.5 2-.5 4-2 6.5" }, { r: "sway", d: 0.2, a: 6, o: [9.5, 11] }],
    ["path", { d: "M14.5 11c1.5 2 .5 4 2 6.5" }, { r: "sway", d: 0.2, a: -6, o: [14.5, 11] }],
  ],
});
