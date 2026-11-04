import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "m5stack" (CC0-1.0). M5Stack is a trademark of its owner.
export const BrandM5stack = createIcon("BrandM5stack", "brand-m5stack", {
  nodes: [
    ["path", { d: "M12 3l9 4.5-9 4.5-9-4.5z" }, { r: "press", a: 0.05, o: [12, 21] }],
    ["path", { d: "M3 7.5V16l9 5 9-5V7.5M12 12v9" }, { r: "press", a: 0.05, o: [12, 21] }],
    ["path", { d: "M14 5h-3.5l-.5 2.5h2.5a1.25 1.25 0 0 1 0 2.5H10" }, { r: "pop", d: 0.2, o: [12, 7.5] }],
  ],
});
