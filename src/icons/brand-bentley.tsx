import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "bentley" (CC0-1.0). Bentley is a trademark of its owner.
export const BrandBentley = createIcon("BrandBentley", "brand-bentley", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "4.5" }],
    ["path", { d: "M10.75 9.75v4.5h1.5a1.1 1.1 0 0 0 0-2.25h-1.5h1.3a1.1 1.1 0 0 0 0-2.25z" }, { r: "pop", o: [12, 12] }],
    ["path", { d: "M7.5 10.5C5.5 9 4 9 2 8.5M7.6 13c-2-.5-3.6-1-5-2.2M8.6 15.2c-1.8 0-3.4-.6-4.6-1.7" }, { r: "swing", a: -10, o: [7.5, 12] }],
    ["path", { d: "M16.5 10.5C18.5 9 20 9 22 8.5M16.4 13c2-.5 3.6-1 5-2.2M15.4 15.2c1.8 0 3.4-.6 4.6-1.7" }, { r: "swing", a: 10, o: [16.5, 12] }],
  ],
});
