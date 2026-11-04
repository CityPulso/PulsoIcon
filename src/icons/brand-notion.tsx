import { createIcon } from "../runtime/createIcon.js";

export const BrandNotion = createIcon("BrandNotion", "brand-notion", {
  nodes: [
    ["path", { d: "M4 4.6 15 3.8l5 3.4v13l-11.6.8L4 17.6z" }, { r: "wobble", a: 5, o: [12, 12] }],
    ["path", { d: "M8 7.6l12-.4" }, { r: "fade", d: 0.05, o: [14, 7.4] }],
    ["path", { d: "M10 18v-7l5 7v-7" }, { r: "draw", d: 0.1, o: [12.5, 14.5] }],
  ],
});
