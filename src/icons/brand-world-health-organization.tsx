import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "worldhealthorganization" (CC0-1.0). World Health Organization is a trademark of its owner.
export const BrandWorldHealthOrganization = createIcon("BrandWorldHealthOrganization", "brand-world-health-organization", {
  nodes: [
    ["path", { d: "M5.5 6a9 9 0 0 0 3.5 14.5" }, { r: "sway", a: 4, o: [7, 13] }],
    ["path", { d: "M18.5 6A9 9 0 0 1 15 20.5" }, { r: "sway", a: -4, o: [17, 13] }],
    ["circle", { cx: "12", cy: "12.5", r: "5" }, { r: "press", d: 0.05, a: 0.08, o: [12, 12.5] }],
    ["path", { d: "M7 12.5h10" }, { r: "press", d: 0.05, a: 0.08, o: [12, 12.5] }],
    ["path", { d: "M12 2v20" }, { r: "draw", d: 0.1, o: [12, 12] }],
    ["path", { d: "M10 4.5h2.75a1.25 1.25 0 0 1 0 2.5h-1.5" }, { r: "draw", d: 0.25, o: [12, 6] }],
  ],
});
