import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "photocrowd" (CC0-1.0). Photocrowd is a trademark of its owner.

export const BrandPhotocrowd = createIcon("BrandPhotocrowd", "brand-photocrowd", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "4" }],
    ["path", { d: "M12 12h.01" }, { r: "pop" }],
    ["path", { d: "M15.5 12h.01M13.75 15.03h.01M10.25 15.03h.01M8.5 12h.01M10.25 8.97h.01M13.75 8.97h.01" }, { r: "pop", d: 0.12, o: [12, 12] }],
    ["path", { d: "M17.54 14.3h.01M14.3 17.54h.01M9.7 17.54h.01M6.46 14.3h.01M6.46 9.7h.01M9.7 6.46h.01M14.3 6.46h.01M17.54 9.7h.01" }, { r: "pop", d: 0.24, o: [12, 12] }],
  ],
});
