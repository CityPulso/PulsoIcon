import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "home-table" (MIT, Copyright (c) 2021 Luca Burgio).
export const HomeTable = createIcon("HomeTable", "home-table", {
  nodes: [
    ["path", { d: "M4 7L4 17" }, { r: "grow", d: 0.1, o: [4, 7] }],
    ["path", { d: "M1 7L23 7" }, { r: "float", a: 1 }],
    ["path", { d: "M4 10L20 10" }, { r: "float", a: 1 }],
    ["path", { d: "M20 7L20 17" }, { r: "grow", d: 0.1, o: [20, 7] }],
  ],
});
