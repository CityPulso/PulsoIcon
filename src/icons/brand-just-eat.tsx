import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "justeat" (CC0-1.0). Just Eat is a trademark of its owner.
export const BrandJustEat = createIcon("BrandJustEat", "brand-just-eat", {
  nodes: [
    ["path", { d: "M2.5 11L12 3l9.5 8 M5 9v12h14V9" }, { r: "press", a: 0.03, o: [12, 21] }],
    ["path", { d: "M8.5 10.5v3a1.5 1.5 0 0 0 3 0v-3 M10 14.5V19" }, { r: "wobble", o: [10, 19] }],
    ["path", { d: "M15 19v-8.5c1.5 1 2 3.5 1.5 5.5H15" }, { r: "wobble", o: [15, 19], d: 0.1 }],
  ],
});
