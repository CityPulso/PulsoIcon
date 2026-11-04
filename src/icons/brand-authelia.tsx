import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "authelia" (Apache-2.0). Authelia is a trademark of its owner.
export const BrandAuthelia = createIcon("BrandAuthelia", "brand-authelia", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "4.5" }],
    ["path", { d: "M12 11v2.5" }, { r: "turn", a: 90, o: [12, 11.5] }],
    ["path", { d: "M12 10h.01" }, { r: "turn", a: 90, o: [12, 11.5] }],
    ["path", { d: "M3.07 8.75A9.5 9.5 0 0 1 20.23 7.25" }, { r: "spin", a: 180, o: [12, 12] }],
    ["path", { d: "M20.93 15.25A9.5 9.5 0 0 1 3.77 16.75" }, { r: "spin", a: 180, o: [12, 12] }],
  ],
});
