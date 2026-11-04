import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "xdotorg" (CC0-1.0). X.Org is a trademark of its owner.
export const BrandXOrg = createIcon("BrandXOrg", "brand-x-org", {
  nodes: [
    ["path", { d: "M4.5 3 19.5 21M19.5 3 4.5 21" }, { r: "draw", o: [12, 12] }],
    ["ellipse", { cx: "12", cy: "13.5", rx: "10", ry: "5.5" }, { r: "turn", d: 0.1, a: -15, o: [12, 13.5] }],
  ],
});
