import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "plug-type-l" (MIT, Copyright (c) 2021 Luca Burgio).
export const PlugTypeL = createIcon("PlugTypeL", "plug-type-l", {
  nodes: [
    ["path", { d: "M10 3H5.6C5.26863 3 5 3.26863 5 3.6V20.4C5 20.7314 5.26863 21 5.6 21H10" }],
    ["path", { d: "M11 7H13" }, { r: "pop", o: [12, 7] }],
    ["path", { d: "M11 12H13" }, { r: "pop", d: 0.1, o: [12, 12] }],
    ["path", { d: "M11 17H13" }, { r: "pop", d: 0.2, o: [12, 17] }],
    ["path", { d: "M14 3H18.4C18.7314 3 19 3.26863 19 3.6V20.4C19 20.7314 18.7314 21 18.4 21H14" }],
  ],
});
