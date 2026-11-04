import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "eclipsemosquitto" (CC0-1.0). Eclipse Mosquitto is a trademark of its owner.
export const BrandEclipseMosquitto = createIcon("BrandEclipseMosquitto", "brand-eclipse-mosquitto", {
  nodes: [
    ["circle", { cx: "12", cy: "10.5", r: "1.5" }, { r: "pop", o: [12, 10.5] }],
    ["path", { d: "M12 12.5V21" }],
    ["path", { d: "M8.5 7a5 5 0 0 0 0 7M15.5 7a5 5 0 0 1 0 7" }, { r: "pulse", d: 0.1, o: [12, 10.5] }],
    ["path", { d: "M5.5 4a9 9 0 0 0 0 13M18.5 4a9 9 0 0 1 0 13" }, { r: "pulse", d: 0.2, o: [12, 10.5] }],
  ],
});
