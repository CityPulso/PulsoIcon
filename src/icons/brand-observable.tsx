import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "observable" (CC0-1.0). Observable is a trademark of its owner.
export const BrandObservable = createIcon("BrandObservable", "brand-observable", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["circle", { cx: "12", cy: "12", r: "3.5" }, { r: "blink", o: [12, 12] }],
  ],
});
