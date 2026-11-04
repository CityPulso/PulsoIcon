import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "xiaomi" (CC0-1.0). Xiaomi is a trademark of its owner.
export const BrandXiaomi = createIcon("BrandXiaomi", "brand-xiaomi", {
  nodes: [
    ["path", { d: "M12 3c7 0 9 2 9 9s-2 9-9 9-9-2-9-9 2-9 9-9z" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M7 15.5V8.5h4.5a2 2 0 0 1 2 2v5M10.25 12v3.5" }, { r: "draw", d: 0.1, o: [10, 12] }],
    ["path", { d: "M17 8.5v7" }, { r: "draw", d: 0.25, o: [17, 12] }],
  ],
});
