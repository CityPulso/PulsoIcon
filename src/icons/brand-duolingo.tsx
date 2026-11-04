import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "duolingo" (CC0-1.0). Duolingo is a trademark of its owner.
export const BrandDuolingo = createIcon("BrandDuolingo", "brand-duolingo", {
  nodes: [
    ["path", { d: "M5 9v6a5 5 0 0 0 5 5h4a5 5 0 0 0 5-5V9l1-5-4.5 2.5h-5L6 4z" }, { r: "press", a: 0.04, o: [12, 20] }],
    ["circle", { cx: "8.75", cy: "11.5", r: "2" }, { r: "blink", o: [12, 11.5] }],
    ["circle", { cx: "15.25", cy: "11.5", r: "2" }, { r: "blink", o: [12, 11.5] }],
    ["path", { d: "M11 15.5l1 1.5 1-1.5" }, { r: "pop", d: 0.2, o: [12, 16] }],
  ],
});
