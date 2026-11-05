import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "panorama-vertical-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
// Solid from Tabler Icons "panorama-vertical" filled (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PanoramaVerticalOff = createIcon("PanoramaVerticalOff", "panorama-vertical-off", {
  nodes: [
    [
      "path",
      {
        d: "M7 3h10.53c.693 0 1.18 .691 .935 1.338c-1.098 2.898 -1.573 5.795 -1.425 8.692m.828 4.847c.172 .592 .37 1.185 .595 1.778a1 1 0 0 1 -.934 1.345h-11c-.692 0 -1.208 -.692 -.962 -1.34c1.697 -4.486 1.903 -8.973 .619 -13.46",
      },
      { r: "slide", y: 1, a: 1 },
    ],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
  solid: [
    [
      "path",
      {
        d: "M17.53 2c1.39 0 2.364 1.389 1.87 2.692l-.013 .026l-.156 .431c-1.623 4.572 -1.622 9.123 .003 13.703l.168 .458a2 2 0 0 1 -1.873 2.69h-11c-1.386 0 -2.394 -1.386 -1.897 -2.694c1.845 -4.879 1.845 -9.734 0 -14.612c-.495 -1.304 .48 -2.694 1.87 -2.694z",
        stroke: "none",
      },
      { r: "slide", y: 1, a: 1 },
    ],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
