import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "sort" (MIT, Copyright (c) 2021 Luca Burgio).
export const Sort = createIcon("Sort", "sort", {
  nodes: [
    ["path", { d: "M10 14H2" }, { r: "growX", o: [2, 14] }],
    ["path", { d: "M8 10H2" }, { r: "growX", d: 0.05, o: [2, 10] }],
    ["path", { d: "M6 6H2" }, { r: "growX", d: 0.1, o: [2, 6] }],
    ["path", { d: "M12 18H2" }, { r: "growX", d: 0.15, o: [2, 18] }],
    ["path", { d: "M19 20V4M19 20L22 17M19 20L16 17M19 4L22 7M19 4L16 7" }, { r: "fold", o: [19, 12] }],
  ],
});
