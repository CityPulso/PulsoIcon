import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "jasmine" (CC0-1.0). Jasmine is a trademark of its owner.
export const BrandJasmine = createIcon("BrandJasmine", "brand-jasmine", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M12 5v3M12 16v3M5 12h3M16 12h3M7 7l2.1 2.1M14.9 14.9L17 17M17 7l-2.1 2.1M9.1 14.9L7 17" }, { r: "spin", a: 90, o: [12, 12] }],
  ],
});
