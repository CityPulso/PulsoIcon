import { createIcon } from "../runtime/createIcon.js";

export const BrandFirefox = createIcon("BrandFirefox", "brand-firefox", {
  nodes: [
    ["circle", { cx: "12.5", cy: "13.5", r: "3.5" }, { r: "spin", d: 0.1, o: [12.5, 13.5] }],
    ["path", { d: "M3.3 10.5A9 9 0 1 0 20.4 8.4l-1-4.4-2.2 2.6C15.9 5.6 14.3 5 12.5 5" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M3.3 10.5c.5-3 2.4-5.6 5-6.8-.6 1.1-.8 2.2-.5 3.3C9 5.7 10.7 5 12.5 5c-1.8.8-3.1 2.2-3.6 4" }, { r: "sway", d: 0.05, a: 8, o: [6, 10] }],
  ],
});
