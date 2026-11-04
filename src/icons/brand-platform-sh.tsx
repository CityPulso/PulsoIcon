import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "platformdotsh" (CC0-1.0). Platform.sh is a trademark of its owner.

export const BrandPlatformSh = createIcon("BrandPlatformSh", "brand-platform-sh", {
  nodes: [
    ["rect", { x: "3", y: "4", width: "18", height: "16", rx: "1" }],
    ["path", { d: "M3 9.5h18" }, { r: "growX", d: 0.1, o: [3, 9.5] }],
    ["path", { d: "M3 14.5h18" }, { r: "growX", d: 0.2, o: [3, 14.5] }],
  ],
});
