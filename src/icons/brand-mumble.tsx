import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "mumble" (CC0-1.0). Mumble is a trademark of its owner.
export const BrandMumble = createIcon("BrandMumble", "brand-mumble", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M8 15.5V9a4 4 0 0 1 8 0v6.5" }, { r: "press", a: 0.06, o: [12, 9] }],
    ["path", { d: "M8 15.5c0 2 1.5 3 3.5 3" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M12.5 18.5h.01" }, { r: "pop", d: 0.3, o: [12.5, 18.5] }],
  ],
});
