import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "buffer" (CC0-1.0). Buffer is a trademark of its owner.
export const BrandBuffer = createIcon("BrandBuffer", "brand-buffer", {
  nodes: [
    ["path", { d: "M12 3l9 4.5-9 4.5-9-4.5z" }, { r: "drop", x: 0, y: -1, a: 1 }],
    ["path", { d: "M3 12l9 4.5 9-4.5" }, { r: "drop", d: 0.08, x: 0, y: -1, a: 1 }],
    ["path", { d: "M3 16.5l9 4.5 9-4.5" }, { r: "press", d: 0.16, a: 0.04, o: [12, 21] }],
  ],
});
