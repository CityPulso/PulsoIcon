import { createIcon } from "../runtime/createIcon.js";

export const BrandSubreddit = createIcon("BrandSubreddit", "brand-subreddit", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M8 16v-6" }, { r: "grow", d: 0.05, o: [8, 16] }],
    ["path", { d: "M8 12.5A2.5 2.5 0 0 1 10.5 10h.5" }, { r: "draw", d: 0.1, o: [9.5, 11] }],
    ["path", { d: "M16.5 7.5l-3 9" }, { r: "draw", d: 0.2, o: [15, 12] }],
  ],
});
