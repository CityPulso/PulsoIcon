import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "appimage" (CC0-1.0). AppImage is a trademark of its owner.
export const BrandAppimage = createIcon("BrandAppimage", "brand-appimage", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }],
    ["path", { d: "M12 5.5v4M10 7.5l2 2 2-2" }, { r: "slide", x: 0, y: 1, a: 1, o: [12, 7.5] }],
    ["circle", { cx: "12", cy: "15.5", r: "2" }, { r: "spin", d: 0.1, o: [12, 15.5] }],
    ["path", { d: "M12 12h.01M12 19h.01M8.5 15.5h.01M15.5 15.5h.01" }, { r: "spin", d: 0.1, o: [12, 15.5] }],
  ],
});
