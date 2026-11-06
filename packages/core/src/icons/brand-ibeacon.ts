import { icon } from "../icon.js";

// Drawn after Simple Icons "ibeacon" (CC0-1.0). iBeacon is a trademark of its owner.

export const BrandIbeacon = icon("BrandIbeacon", "brand-ibeacon", {
  nodes: [
    ["circle", { cx: "12", cy: "11", r: "1.5" }, { r: "pop", o: [12, 11] }],
    ["path", { d: "M12 14v7" }, { r: "grow", o: [12, 21] }],
    ["path", { d: "M9 14.5A5 5 0 1 1 15 14.5" }, { r: "pop", d: 0.1, o: [12, 11] }],
    ["path", { d: "M8.5 19.3A9 9 0 1 1 15.5 19.3" }, { r: "pop", d: 0.2, o: [12, 11] }],
  ],
});
