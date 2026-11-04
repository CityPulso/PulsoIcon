import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "woocommerce" (CC0-1.0). WooCommerce is a trademark of its owner.
export const BrandWoocommerce = createIcon("BrandWoocommerce", "brand-woocommerce", {
  nodes: [
    ["path", { d: "M5 5h14a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-9l-4 3v-3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3z" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M5.5 9l1.25 4.5L8.5 11l1.75 2.5L11.5 9" }, { r: "draw", d: 0.1, o: [8.5, 11] }],
    ["circle", { cx: "15", cy: "11.25", r: "1.25" }, { r: "pop", d: 0.25, o: [15, 11.25] }],
    ["circle", { cx: "18.75", cy: "11.25", r: "1.25" }, { r: "pop", d: 0.32, o: [18.75, 11.25] }],
  ],
});
