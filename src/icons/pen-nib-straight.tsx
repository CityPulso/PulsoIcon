import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "pen-nib-straight" (MIT, Copyright (c) 2023 Phosphor Icons).
// Solid from Phosphor Icons "pen-nib-straight" fill (MIT, Copyright (c) 2023 Phosphor Icons).
export const PenNibStraight = createIcon("PenNibStraight", "pen-nib-straight", {
  nodes: [
    ["rect", { width: "8", height: "4", x: "8", y: "3", rx: "1" }, { r: "tilt", a: 10, o: [12, 21] }],
    ["path", { d: "M8.5 7 5 13.5l7 7.5 7-7.5L15.5 7" }, { r: "tilt", a: 10, o: [12, 21] }],
    ["circle", { cx: "12", cy: "12.5", r: "1.5" }, { r: "tilt", a: 10, o: [12, 21] }],
    ["path", { d: "M12 14v7" }, { r: "tilt", a: 10, o: [12, 21] }],
  ],
  solid: [
    [
      "path",
      {
        d: "M20.843 11.615c-0.006-0.012-0.011-0.024-0.018-0.036L18 6.554V3a1.5 1.5 0 0 0-1.5-1.5H7.5A1.5 1.5 0 0 0 6 3V6.553L3.174 11.579c-0.007 0.011-0.012 0.023-0.019 0.036a1.494 1.494 0 0 0 0.137 1.553l0.01 0.013 7.276 9.451A0.375 0.375 0 0 0 11.25 22.406V14.497a2.25 2.25 0 1 1 1.5 0V22.406a0.375 0.375 0 0 0 0.671 0.229l7.275-9.451 0.01-0.013A1.492 1.492 0 0 0 20.843 11.615ZM16.5 6H7.5V3h9Z",
        stroke: "none",
      },
      { r: "tilt", a: 10, o: [12, 21] },
    ],
  ],
});
