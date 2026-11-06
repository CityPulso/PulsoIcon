import { icon } from "../icon.js";

// Drawn after Simple Icons "smartthings" (CC0-1.0). SmartThings is a trademark of its owner.
export const BrandSmartthings = icon("BrandSmartthings", "brand-smartthings", {
  nodes: [
    ["rect", { x: "2", y: "2", width: "20", height: "20", rx: "6" }],
    ["circle", { cx: "12", cy: "12.25", r: "2" }, { r: "pulse", a: 0.2, o: [12, 12.25] }],
    ["circle", { cx: "12", cy: "6", r: "1" }, { r: "pop", d: 0.08, o: [12, 6] }],
    ["circle", { cx: "6.5", cy: "12.5", r: "1" }, { r: "pop", d: 0.16, o: [6.5, 12.5] }],
    ["circle", { cx: "17.5", cy: "12.5", r: "1" }, { r: "pop", d: 0.24, o: [17.5, 12.5] }],
    ["circle", { cx: "12", cy: "18.5", r: "1" }, { r: "pop", d: 0.32, o: [12, 18.5] }],
  ],
});
