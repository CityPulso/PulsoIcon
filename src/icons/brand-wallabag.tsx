import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "wallabag" (CC0-1.0). Wallabag is a trademark of its owner.
export const BrandWallabag = createIcon("BrandWallabag", "brand-wallabag", {
  nodes: [
    ["path", { d: "M9.5 7 8 2.5" }, { r: "swing", a: 12, o: [9.5, 7] }],
    ["path", { d: "M14.5 7 16 2.5" }, { r: "swing", a: -12, d: 0.05, o: [14.5, 7] }],
    ["rect", { x: "7", y: "7", width: "10", height: "11", rx: "3" }, { r: "bounce", y: -1, o: [12, 12] }],
    ["path", { d: "M9.5 10.5l1 4 1.5-2.5 1.5 2.5 1-4" }, { r: "bounce", y: -1, o: [12, 12] }],
    ["path", { d: "M8 17c-1.5 2-3.5 3-6 3" }, { r: "swing", a: 8, d: 0.1, o: [8, 17] }],
    ["path", { d: "M12 18l1 3.5h3" }, { r: "bounce", y: -1, o: [12, 12] }],
  ],
});
