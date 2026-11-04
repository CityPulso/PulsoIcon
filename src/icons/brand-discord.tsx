import { createIcon } from "../runtime/createIcon.js";

export const BrandDiscord = createIcon("BrandDiscord", "brand-discord", {
  nodes: [
    [
      "path",
      {
        d: "M8.5 17c-1 1.4-2 2.5-2 2.5-3-.1-4.5-2-4.5-2 0-5 2-9.5 2-9.5 2-1.5 4-1.6 4-1.6l.5 1A13 13 0 0 1 12 7a13 13 0 0 1 3.5.4l.5-1s2 .1 4 1.6c0 0 2 4.5 2 9.5 0 0-1.5 1.9-4.5 2 0 0-1-1.1-2-2.5",
      },
      { r: "wobble", a: 5, o: [12, 14] },
    ],
    ["path", { d: "M7.5 16c3 1.3 6 1.3 9 0" }, { r: "draw", d: 0.1, o: [12, 16.5] }],
    ["circle", { cx: "9", cy: "12.5", r: "1.25" }, { r: "blink", d: 0.15, o: [12, 12.5] }],
    ["circle", { cx: "15", cy: "12.5", r: "1.25" }, { r: "blink", d: 0.15, o: [12, 12.5] }],
  ],
});
