import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "playerfm" (CC0-1.0). Player FM is a trademark of its owner.

export const BrandPlayerFm = createIcon("BrandPlayerFm", "brand-player-fm", {
  nodes: [
    ["path", { d: "M12 3a9 9 0 1 0 9 9" }, { r: "spin", a: 360, o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "1.5" }, { r: "pop" }],
    ["path", { d: "M12 8.5a3.5 3.5 0 0 1 3.5 3.5" }, { r: "draw", d: 0.12 }],
    ["path", { d: "M12 5a7 7 0 0 1 7 7" }, { r: "draw", d: 0.24 }],
  ],
});
