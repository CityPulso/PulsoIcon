import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "greensock" (CC0-1.0). GreenSock is a trademark of its owner.

export const BrandGreensock = createIcon("BrandGreensock", "brand-greensock", {
  nodes: [
    ["circle", { cx: "13", cy: "4.5", r: "2" }, { r: "press", a: 0.1, o: [13, 4.5] }],
    ["path", { d: "M10.5 8h5l-1 6h-3z" }, { r: "press", a: 0.06, o: [13, 14] }],
    ["path", { d: "M10.5 8.5 9 11.5l2 1.5M15.5 8.5l1.5 3-2 1.5" }, { r: "press", a: 0.06, o: [13, 14] }],
    ["path", { d: "M11.5 14l-.5 7M14.5 14l.5 7" }, { r: "press", a: 0.06, o: [13, 14] }],
    ["path", { d: "M10.5 8c-3 2-5.5 6-7.5 10 3-.5 5.5-2 7-4" }, { r: "sway", a: 10, d: 0.1, o: [10.5, 8] }],
  ],
});
