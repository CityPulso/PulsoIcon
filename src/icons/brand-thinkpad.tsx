import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "thinkpad" (CC0-1.0). ThinkPad is a trademark of its owner.

export const BrandThinkpad = createIcon("BrandThinkpad", "brand-thinkpad", {
  nodes: [
    ["path", { d: "M2 6h8M6 6v13" }],
    ["path", { d: "M12.5 10v9" }],
    ["path", { d: "M12.5 6.5h.01" }, { r: "pop", a: 1.5, o: [12.5, 6.5] }],
    ["path", { d: "M16 19V6h2.5a3.5 3.5 0 0 1 0 7H16" }],
  ],
});
