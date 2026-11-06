import { icon } from "../icon.js";

// Drawn after Simple Icons "wwise" (CC0-1.0). Wwise is a trademark of its owner.
export const BrandWwise = icon("BrandWwise", "brand-wwise", {
  nodes: [
    ["path", { d: "M3 12h.01M21 12h.01" }, { r: "pulse", d: 0.3, a: 0.3, o: [12, 12] }],
    ["path", { d: "M6.5 12h.01M17.5 12h.01" }, { r: "pulse", d: 0.15, a: 0.3, o: [12, 12] }],
    ["circle", { cx: "12", cy: "6", r: "2" }, { r: "pop", d: 0.1, o: [12, 6] }],
    ["circle", { cx: "12", cy: "12", r: "2" }, { r: "pop", o: [12, 12] }],
    ["circle", { cx: "12", cy: "18", r: "2" }, { r: "pop", d: 0.1, o: [12, 18] }],
    ["path", { d: "M12 8v2M12 14v2" }, { r: "fade", d: 0.2, o: [12, 12] }],
  ],
});
