import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "crown-circle" (MIT, Copyright (c) 2021 Luca Burgio).
export const CrownCircle = createIcon("CrownCircle", "crown-circle", {
  nodes: [
    ["path", { d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z" }],
    ["path", { d: "M16.8 15.5L18 8.5L13.8 10.6L12 8.5L10.2 10.6L6 8.5L7.2 15.5H16.8Z" }, { r: "bounce", y: -1, a: 1.5, o: [12, 12] }],
  ],
});
