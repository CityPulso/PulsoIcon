import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "dazhongdianping" (CC0-1.0). Dazhong Dianping is a trademark of its owner.
export const BrandDazhongDianping = createIcon("BrandDazhongDianping", "brand-dazhong-dianping", {
  nodes: [
    ["rect", { x: "2.5", y: "2.5", width: "19", height: "19", rx: "5" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["circle", { cx: "11", cy: "7.5", r: "1.75" }, { r: "bounce", y: -1, a: 1.2 }],
    ["path", { d: "M6 8.5c2 3 4 4.5 6 4.5s4.5-1.5 6.5-4.5" }, { r: "bounce", d: 0.03, y: -1, a: 1.2 }],
    ["path", { d: "M8 18.5c0-3 1.8-5.5 4-5.5s4 2.5 4 5.5" }, { r: "bounce", d: 0.06, y: -1, a: 1.2 }],
  ],
});
