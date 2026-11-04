import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "foundryvirtualtabletop" (CC0-1.0). Foundry Virtual Tabletop is a trademark of its owner.
export const BrandFoundryVirtualTabletop = createIcon("BrandFoundryVirtualTabletop", "brand-foundry-virtual-tabletop", {
  nodes: [
    ["path", { d: "M12 2 20.7 7v10L12 22l-8.7-5V7z" }, { r: "wobble", a: 6, o: [12, 12] }],
    ["polygon", { points: "12 7.5 16.5 15.5 7.5 15.5" }, { r: "wobble", a: 6, o: [12, 12] }],
    ["path", { d: "M12 2v5.5M3.3 7 12 7.5l8.7-.5M3.3 7l4.2 8.5M20.7 7l-4.2 8.5M3.3 17l4.2-1.5M20.7 17l-4.2-1.5M12 22l-4.5-6.5M12 22l4.5-6.5" }, { r: "wobble", a: 6, o: [12, 12] }],
  ],
});
