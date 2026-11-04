import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "rows-plus-top" (MIT, Copyright (c) 2023 Phosphor Icons).
export const RowsPlusTop = createIcon("RowsPlusTop", "rows-plus-top", {
  nodes: [
    ["path", { d: "M12 2.5v5" }, { r: "spin", d: 0.1, a: 90, o: [12, 5] }],
    ["path", { d: "M9.5 5h5" }, { r: "spin", d: 0.1, a: 90, o: [12, 5] }],
    ["rect", { x: "3", y: "9", width: "18", height: "5", rx: "1.5" }, { r: "slide", y: 1, a: 1, o: [12, 11.5] }],
    ["rect", { x: "3", y: "16.5", width: "18", height: "5", rx: "1.5" }, { r: "slide", y: 1, a: 1, o: [12, 19] }],
  ],
});
