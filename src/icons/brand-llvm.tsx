import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "llvm" (CC0-1.0). LLVM is a trademark of its owner.

export const BrandLlvm = createIcon("BrandLlvm", "brand-llvm", {
  nodes: [
    ["path", { d: "M12 12C10 8 6 6.5 2.5 4c.5 4 3 7.5 6.5 9" }, { r: "swing", a: -12, o: [12, 12] }],
    ["path", { d: "M12 12c2-4 6-5.5 9.5-8-.5 4-3 7.5-6.5 9" }, { r: "swing", a: 12, o: [12, 12] }],
    ["path", { d: "M12 12c-1 3-1 5 1 6.5s1 3.5-2 3.5" }, { r: "sway", d: 0.1, a: 6, o: [12, 12] }],
    ["circle", { cx: "12", cy: "9", r: "1.5" }],
  ],
});
