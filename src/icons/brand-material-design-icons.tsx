import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "materialdesignicons" (Apache-2.0). Material Design Icons is a trademark of its owner.
export const BrandMaterialDesignIcons = createIcon("BrandMaterialDesignIcons", "brand-material-design-icons", {
  nodes: [
    ["path", { d: "M7 5h10M7 19h10M5 7v10M19 7v10" }, { r: "draw" }],
    ["rect", { x: "3", y: "3", width: "4", height: "4", rx: "0.5" }, { r: "pop", d: 0.1, o: [5, 5] }],
    ["rect", { x: "17", y: "3", width: "4", height: "4", rx: "0.5" }, { r: "pop", d: 0.16, o: [19, 5] }],
    ["rect", { x: "17", y: "17", width: "4", height: "4", rx: "0.5" }, { r: "pop", d: 0.22, o: [19, 19] }],
    ["rect", { x: "3", y: "17", width: "4", height: "4", rx: "0.5" }, { r: "pop", d: 0.28, o: [5, 19] }],
  ],
});
