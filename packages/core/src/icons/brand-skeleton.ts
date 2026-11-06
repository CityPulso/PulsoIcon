import { icon } from "../icon.js";

// Drawn after Simple Icons "skeleton" (CC0-1.0). Skeleton is a trademark of its owner.
export const BrandSkeleton = icon("BrandSkeleton", "brand-skeleton", {
  nodes: [
    ["path", { d: "M6 4.5 9 7h6l3-2.5 1 3.5c1.5 2.5 1.5 6 0 8-.8 1-2 1.5-3 1.5V21H8v-3.5c-1 0-2.2-.5-3-1.5-1.5-2-1.5-5.5 0-8z" }, { r: "wobble", a: 6, o: [12, 14] }],
    ["circle", { cx: "9", cy: "12", r: "1.5" }, { r: "blink", d: 0.15, o: [9, 12] }],
    ["circle", { cx: "15", cy: "12", r: "1.5" }, { r: "blink", d: 0.15, o: [15, 12] }],
    ["path", { d: "M12 17.5v3.5" }],
  ],
});
