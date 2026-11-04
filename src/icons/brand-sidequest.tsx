import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "sidequest" (CC0-1.0). SideQuest is a trademark of its owner.

export const BrandSidequest = createIcon("BrandSidequest", "brand-sidequest", {
  nodes: [
    ["path", { d: "M12 2 20.66 7 20.66 17 12 22 3.34 17 3.34 7z" }],
    ["path", { d: "M12 15.5 8.97 10.25 15.03 10.25z" }, { r: "spin", a: 120, o: [12, 12] }],
    ["path", { d: "M12 15.5L20.66 7" }, { r: "spin", a: 120, o: [12, 12] }],
    ["path", { d: "M8.97 10.25L12 22" }, { r: "spin", a: 120, o: [12, 12] }],
    ["path", { d: "M15.03 10.25L3.34 7" }, { r: "spin", a: 120, o: [12, 12] }],
  ],
});
