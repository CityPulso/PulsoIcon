import { icon } from "../icon.js";

// Drawn after Simple Icons "probot" (CC0-1.0). Probot is a trademark of its owner.
export const BrandProbot = icon("BrandProbot", "brand-probot", {
  nodes: [
    ["rect", { x: "3", y: "8", width: "18", height: "13", rx: "2.5" }, { r: "press", a: 0.05, o: [12, 21] }],
    ["path", { d: "M12 8V5.5" }, { r: "float", d: 0.05, a: 1, o: [12, 5] }],
    ["circle", { cx: "12", cy: "4", r: "1.5" }, { r: "float", d: 0.05, a: 1, o: [12, 4] }],
    ["circle", { cx: "8.5", cy: "13.5", r: "2.5" }, { r: "blink", d: 0.15, o: [8.5, 13.5] }],
    ["circle", { cx: "15.5", cy: "13.5", r: "2.5" }, { r: "blink", d: 0.15, o: [15.5, 13.5] }],
    ["path", { d: "M10 18h4" }, { r: "draw", d: 0.25 }],
  ],
});
