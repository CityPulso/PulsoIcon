import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "mqtt" (CC0-1.0). MQTT is a trademark of its owner.
export const BrandMqtt = createIcon("BrandMqtt", "brand-mqtt", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "3" }],
    ["path", { d: "M3 9a12 12 0 0 1 12 12" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M3 15a6 6 0 0 1 6 6" }, { r: "draw" }],
    ["path", { d: "M9 3a12 12 0 0 1 12 12" }, { r: "draw", d: 0.2 }],
  ],
});
