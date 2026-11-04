import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "webdotde" (CC0-1.0). WEB.DE is a trademark of its owner.
export const BrandWebDe = createIcon("BrandWebDe", "brand-web-de", {
  nodes: [
    ["rect", { x: "2", y: "2", width: "20", height: "20", rx: "4" }],
    ["path", { d: "M6 9h12M9 6.5h6" }, { r: "drop", y: -1, a: 2 }],
    ["path", { d: "M7.5 11.5v5" }, { r: "grow", d: 0.05, o: [7.5, 16.5] }],
    ["path", { d: "M10.5 11.5v5" }, { r: "grow", d: 0.1, o: [10.5, 16.5] }],
    ["path", { d: "M13.5 11.5v5" }, { r: "grow", d: 0.15, o: [13.5, 16.5] }],
    ["path", { d: "M16.5 11.5v5" }, { r: "grow", d: 0.2, o: [16.5, 16.5] }],
    ["path", { d: "M6 18.5h12" }],
  ],
});
