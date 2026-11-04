import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "pen-nib-straight" (MIT, Copyright (c) 2023 Phosphor Icons).
export const PenNibStraight = createIcon("PenNibStraight", "pen-nib-straight", {
  nodes: [
    ["rect", { width: "8", height: "4", x: "8", y: "3", rx: "1" }, { r: "tilt", a: 10, o: [12, 21] }],
    ["path", { d: "M8.5 7 5 13.5l7 7.5 7-7.5L15.5 7" }, { r: "tilt", a: 10, o: [12, 21] }],
    ["circle", { cx: "12", cy: "12.5", r: "1.5" }, { r: "tilt", a: 10, o: [12, 21] }],
    ["path", { d: "M12 14v7" }, { r: "tilt", a: 10, o: [12, 21] }],
  ],
});
