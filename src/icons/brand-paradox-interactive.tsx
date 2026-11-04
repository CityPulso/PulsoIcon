import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "paradoxinteractive" (CC0-1.0). Paradox Interactive is a trademark of its owner.
export const BrandParadoxInteractive = createIcon("BrandParadoxInteractive", "brand-paradox-interactive", {
  nodes: [
    ["path", { d: "M15.5 3.5a9 9 0 1 0 5.5 9.5" }, { r: "draw", o: [12, 12] }],
    ["path", { d: "M15.5 3.5 18.5 2l.5 3 2.5 1-2.5 2 1 3" }, { r: "wobble", d: 0.2, a: 8, o: [18.5, 6] }],
    ["path", { d: "M12 8.5c-2.5 0-4 1.5-4 3.5s1.5 3.5 4 3.5l2 2.5M14 12l2.5 1.5" }, { r: "sway", d: 0.1, a: 6, o: [12, 12] }],
  ],
});
