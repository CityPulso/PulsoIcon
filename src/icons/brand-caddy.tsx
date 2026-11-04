import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "caddy" (CC0-1.0). Caddy is a trademark of its owner.
export const BrandCaddy = createIcon("BrandCaddy", "brand-caddy", {
  nodes: [
    ["path", { d: "M17.03 4.54A9 9 0 0 0 4.54 17.03M6.97 19.46A9 9 0 0 0 19.46 6.97" }, { r: "spin", a: 360, o: [12, 12] }],
    ["circle", { cx: "5.64", cy: "18.36", r: "1.5" }, { r: "spin", a: 360, o: [12, 12] }],
    ["circle", { cx: "18.36", cy: "5.64", r: "1.5" }, { r: "spin", a: 360, o: [12, 12] }],
    ["rect", { x: "8.5", y: "11", width: "7", height: "5.5", rx: "1" }],
    ["path", { d: "M10 11V9.5a2 2 0 0 1 4 0V11" }, { r: "lift", y: -0.4, o: [12, 11] }],
  ],
});
