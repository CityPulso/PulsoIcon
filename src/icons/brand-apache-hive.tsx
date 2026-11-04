import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "apachehive" (Apache-2.0). Apache Hive is a trademark of its owner.
export const BrandApacheHive = createIcon("BrandApacheHive", "brand-apache-hive", {
  nodes: [
    ["circle", { cx: "9", cy: "15", r: "6" }, { r: "wobble", a: 4, o: [12, 14] }],
    ["path", { d: "M5 11l4 8.5M8.5 9.5l5 8.5" }, { r: "wobble", a: 4, o: [12, 14] }],
    ["circle", { cx: "16.5", cy: "7.5", r: "3.5" }, { r: "tilt", d: 0.1, a: 8, o: [16.5, 9] }],
    ["path", { d: "M19.5 9.5c1.5 1 2 2.5 1.5 4" }, { r: "swing", d: 0.15, a: 15, o: [19.5, 9.5] }],
  ],
});
