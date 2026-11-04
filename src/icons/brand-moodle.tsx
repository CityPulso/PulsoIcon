import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "moodle" (CC0-1.0). Moodle is a trademark of its owner.
export const BrandMoodle = createIcon("BrandMoodle", "brand-moodle", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M7 17v-3.5a2 2 0 0 1 2.5-1.9M12 17v-3.5a2.5 2.5 0 0 1 5 0V17" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M6 9.5 12 7l5.5 2.5M8.5 9v1.5" }, { r: "lift", y: -1, a: -6, o: [12, 9] }],
  ],
});
