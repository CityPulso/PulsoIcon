import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "table-2-columns" (MIT, Copyright (c) 2021 Luca Burgio).
export const Table2Columns = createIcon("Table2Columns", "table-2-columns", {
  nodes: [
    ["path", { d: "M3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4Z" }],
    ["path", { d: "M3 16.5H21" }, { r: "growX", d: 0.1, o: [12, 16.5] }],
    ["path", { d: "M3 12H21" }, { r: "growX", d: 0.15, o: [12, 12] }],
    ["path", { d: "M21 7.5H3" }, { r: "growX", d: 0.2, o: [12, 7.5] }],
    ["path", { d: "M12 21V3" }, { r: "grow", o: [12, 12] }],
  ],
});
