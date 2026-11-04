import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "enpass" (CC0-1.0). Enpass is a trademark of its owner.
export const BrandEnpass = createIcon("BrandEnpass", "brand-enpass", {
  nodes: [
    ["path", { d: "M4 7a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4l-1 10.5a3.5 3.5 0 0 1-3.5 3.5h-7A3.5 3.5 0 0 1 5 17.5z" }],
    ["circle", { cx: "12", cy: "10", r: "2" }, { r: "turn", a: 90, o: [12, 12] }],
    ["path", { d: "M12 12v4" }, { r: "turn", a: 90, o: [12, 12] }],
  ],
});
