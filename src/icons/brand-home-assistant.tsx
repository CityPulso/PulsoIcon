import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "homeassistant" (CC0-1.0). Home Assistant is a trademark of its owner.

export const BrandHomeAssistant = createIcon("BrandHomeAssistant", "brand-home-assistant", {
  nodes: [
    ["path", { d: "M3 21V11l9-8 9 8v10z" }, { r: "press", a: 0.05, o: [12, 21] }],
    ["path", { d: "M12 21v-8.5M12 18.5l-2.8-2.8M12 16.5l2.8-2.8" }, { r: "draw" }],
    ["circle", { cx: "12", cy: "11", r: "1.5" }, { r: "pop", d: 0.3, o: [12, 11] }],
    ["circle", { cx: "8.2", cy: "14.7", r: "1.5" }, { r: "pop", d: 0.4, o: [8.2, 14.7] }],
    ["circle", { cx: "15.8", cy: "12.7", r: "1.5" }, { r: "pop", d: 0.5, o: [15.8, 12.7] }],
  ],
});
