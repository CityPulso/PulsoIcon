import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "rows-plus-bottom" (MIT, Copyright (c) 2023 Phosphor Icons).
export const RowsPlusBottom = createIcon("RowsPlusBottom", "rows-plus-bottom", {
  nodes: [
    ["rect", { x: "3", y: "2.5", width: "18", height: "5", rx: "1.5" }, { r: "slide", y: -1, a: 1, o: [12, 5] }],
    ["rect", { x: "3", y: "10", width: "18", height: "5", rx: "1.5" }, { r: "slide", y: -1, a: 1, o: [12, 12.5] }],
    ["path", { d: "M12 16.5v5" }, { r: "spin", d: 0.1, a: 90, o: [12, 19] }],
    ["path", { d: "M9.5 19h5" }, { r: "spin", d: 0.1, a: 90, o: [12, 19] }],
  ],
});
