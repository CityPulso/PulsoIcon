import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "rotaryinternational" (CC0-1.0). Rotary International is a trademark of its owner.

export const BrandRotaryInternational = createIcon("BrandRotaryInternational", "brand-rotary-international", {
  svg: { r: "spin", a: 60 },
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "7.5" }],
    ["circle", { cx: "12", cy: "12", r: "2" }],
    [
      "path",
      {
        d: "M19.5 12L22 12M18.5 15.75L20.66 17M15.75 18.5L17 20.66M12 19.5L12 22M8.25 18.5L7 20.66M5.5 15.75L3.34 17M4.5 12L2 12M5.5 8.25L3.34 7M8.25 5.5L7 3.34M12 4.5L12 2M15.75 5.5L17 3.34M18.5 8.25L20.66 7",
      },
    ],
    ["path", { d: "M13.93 12.52L19.24 13.94M12.52 13.93L13.94 19.24M10.59 13.41L6.7 17.3M10.07 11.48L4.76 10.06M11.48 10.07L10.06 4.76M13.41 10.59L17.3 6.7" }],
  ],
});
