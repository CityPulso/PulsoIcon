import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "antdesign" (CC0-1.0). Ant Design is a trademark of its owner.
export const BrandAntDesign = createIcon("BrandAntDesign", "brand-ant-design", {
  nodes: [
    ["path", { d: "M15 6 12 3 3 12l9 9 3-3" }, { r: "draw" }],
    ["circle", { cx: "12", cy: "12", r: "2" }, { r: "pop", d: 0.15, o: [12, 12] }],
    ["path", { d: "M18 9l3 3-3 3" }, { r: "slide", d: 0.2, x: 1, y: 0, a: 1.5 }],
  ],
});
