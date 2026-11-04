import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "pusher" (CC0-1.0). Pusher is a trademark of its owner.
export const BrandPusher = createIcon("BrandPusher", "brand-pusher", {
  nodes: [
    ["path", { d: "M5 6.5V21M8.5 8.5V21M12 10.5V21" }, { r: "grow", o: [12, 21] }],
    ["path", { d: "M5 6.5L11 3l9 5.2" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M12 10.5l8-4.6" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M12 14.5l8-4.6M12 18.5l8-4.6" }, { r: "draw", d: 0.3 }],
  ],
});
