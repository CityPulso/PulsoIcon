import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "unitednations" (CC0-1.0). United Nations is a trademark of its owner.

export const BrandUnitedNations = createIcon("BrandUnitedNations", "brand-united-nations", {
  nodes: [
    ["circle", { cx: "12", cy: "10", r: "6" }, { r: "spin", o: [12, 10] }],
    ["path", { d: "M6 10h12M12 4v12" }, { r: "spin", o: [12, 10] }],
    ["path", { d: "M4.5 5.5a10 10 0 0 0 6 16" }, { r: "draw", d: 0.1, o: [7, 14] }],
    ["path", { d: "M19.5 5.5a10 10 0 0 1-6 16" }, { r: "draw", d: 0.1, o: [17, 14] }],
  ],
});
