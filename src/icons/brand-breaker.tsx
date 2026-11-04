import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "breaker" (CC0-1.0). Breaker is a trademark of its owner.
export const BrandBreaker = createIcon("BrandBreaker", "brand-breaker", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M12 12C9 9 9 5 12 2M12 12C16.1 10.9 19.56 12.9 20.66 17M12 12C10.9 16.1 7.44 18.1 3.34 17" }, { r: "spin", a: 120, o: [12, 12] }],
  ],
});
