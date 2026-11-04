import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "gnubash" (MIT). GNU Bash is a trademark of its owner.
export const BrandGnuBash = createIcon("BrandGnuBash", "brand-gnu-bash", {
  nodes: [
    ["path", { d: "M12 2l8.66 5v10L12 22l-8.66-5V7z" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M11.5 10H9.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3H8.5M10 8.5V10M10 16v1.5" }, { r: "draw", d: 0.08, o: [10, 13] }],
    ["path", { d: "M13.5 16h3" }, { r: "flicker", d: 0.2, o: [15, 16] }],
  ],
});
