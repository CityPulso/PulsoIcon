import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "maildotru" (CC0-1.0). Mail.Ru is a trademark of its owner.
export const BrandMailRu = createIcon("BrandMailRu", "brand-mail-ru", {
  text: true,
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "4" }, { r: "pop", d: 0.1, o: [12, 12] }],
    ["path", { d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" }, { r: "draw" }],
  ],
});
