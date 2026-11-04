import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "theboringcompany" (CC0-1.0). The Boring Company is a trademark of its owner.

export const BrandTheBoringCompany = createIcon("BrandTheBoringCompany", "brand-the-boring-company", {
  nodes: [
    ["path", { d: "M3 5h4a3 3 0 0 1 0 6H3z" }],
    ["path", { d: "M3 11h4.5a3.5 3.5 0 0 1 0 7H3z" }],
    ["circle", { cx: "16.5", cy: "11.5", r: "5" }],
    ["circle", { cx: "16.5", cy: "11.5", r: "2" }, { r: "pulse", o: [16.5, 11.5] }],
  ],
});
