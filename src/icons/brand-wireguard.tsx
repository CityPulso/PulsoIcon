import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "wireguard" (CC0-1.0). WireGuard is a trademark of its owner.
export const BrandWireguard = createIcon("BrandWireguard", "brand-wireguard", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M12.5 9.5a2 2 0 1 1-1-3.8M12.5 9.5c-3 .5-3.5 3-2.5 4.5" }, { r: "wobble", d: 0.05, a: 8, o: [12, 13] }],
    ["circle", { cx: "12", cy: "15.5", r: "2.5" }, { r: "wobble", d: 0.05, a: 8, o: [12, 13] }],
    ["path", { d: "M11.5 5.7c1-1.2 2.8-1.3 4-.5" }, { r: "wobble", d: 0.05, a: 8, o: [12, 13] }],
  ],
});
