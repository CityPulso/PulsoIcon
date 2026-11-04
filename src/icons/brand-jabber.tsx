import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "jabber" (CC-BY-2.5). Jabber is a trademark of its owner.
export const BrandJabber = createIcon("BrandJabber", "brand-jabber", {
  nodes: [
    ["path", { d: "M9 15.5c-2.5-1.5-4-4-4-7a7 7 0 0 1 14 0c0 3-1.5 5.5-4 7" }, { r: "pulse", a: 0.05, o: [12, 9] }],
    ["path", { d: "M9 18.5h6M10 21.5h4" }],
    ["path", { d: "M9.5 12c0-1.5.5-2.5 1.2-2.5s.8 1 .8 2.2c0-1.2.4-2.2 1.2-2.2s1.3 1 1.3 2.5" }, { r: "flicker", d: 0.1, o: [12, 11] }],
  ],
});
