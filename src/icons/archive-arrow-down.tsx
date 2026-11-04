import { createIcon } from "../runtime/createIcon.js";

export const ArchiveArrowDown = createIcon("ArchiveArrowDown", "archive-arrow-down", {
  nodes: [
    ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1" }, { r: "lift", x: -0.3, a: -8, o: [2, 8] }],
    ["path", { d: "M4 8v11a2 2 0 0 0 2 2h.343" }],
    ["path", { d: "M20 8v11a2 2 0 0 1-2 2h-.343" }],
    ["path", { d: "m9 18 3 3 3-3" }, { r: "bounce", d: 0.1, y: 1, a: 2, o: [12, 16.5] }],
    ["path", { d: "M12 12v9" }, { r: "bounce", d: 0.1, y: 1, a: 2, o: [12, 16.5] }],
  ],
});
