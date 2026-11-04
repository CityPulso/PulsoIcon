import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "thunderbird" (CC0-1.0). Thunderbird is a trademark of its owner.

export const BrandThunderbird = createIcon("BrandThunderbird", "brand-thunderbird", {
  nodes: [
    ["path", { d: "M8 3.5A9 9 0 1 0 20.5 9" }, { r: "float", a: 1, o: [12, 12] }],
    ["path", { d: "M8 3.5c4.5-1.5 9 0 11 3.5L22 6" }, { r: "float", a: 1, o: [12, 12] }],
    ["rect", { x: "8", y: "10", width: "8", height: "6", rx: "1" }, { r: "press", d: 0.05, a: 0.05, o: [12, 13] }],
    ["path", { d: "m8.5 10.5 3.5 3 3.5-3" }, { r: "draw", d: 0.1 }],
  ],
});
