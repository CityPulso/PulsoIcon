import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "roundcube" (CC0-1.0). Roundcube is a trademark of its owner.

export const BrandRoundcube = createIcon("BrandRoundcube", "brand-roundcube", {
  nodes: [
    ["circle", { cx: "12", cy: "8", r: "5" }, { r: "bounce", y: -1, a: 1 }],
    ["path", { d: "M3 10.5 12 16l9-5.5M3 10.5v6l9 5.5 9-5.5v-6M12 16v6" }],
  ],
});
