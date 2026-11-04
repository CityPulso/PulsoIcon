import { createIcon } from "../runtime/createIcon.js";

export const ZodiacCancer = createIcon("ZodiacCancer", "zodiac-cancer", {
  nodes: [
    ["path", { d: "M21 14.5A9 6.5 0 0 1 5.5 19" }],
    ["path", { d: "M3 9.5A9 6.5 0 0 1 18.5 5" }, { r: "spin", a: 180, o: [12, 12] }],
    ["circle", { cx: "17.5", cy: "14.5", r: "3.5" }],
    ["circle", { cx: "6.5", cy: "9.5", r: "3.5" }, { r: "spin", a: 180, o: [12, 12] }],
  ],
});
