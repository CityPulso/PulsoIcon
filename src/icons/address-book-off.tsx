import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "address-book-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const AddressBookOff = createIcon("AddressBookOff", "address-book-off", {
  nodes: [
    ["path", { d: "M8 4h10a2 2 0 0 1 2 2v10m-.57 3.399c-.363 .37 -.87 .601 -1.43 .601h-10a2 2 0 0 1 -2 -2v-12" }],
    ["path", { d: "M10 16h6" }, { r: "growX", d: 0.1, o: [10, 16] }],
    ["path", { d: "M11 11a2 2 0 0 0 2 2m2 -2a2 2 0 0 0 -2 -2" }, { r: "pop", a: 0.15, o: [13, 11] }],
    ["path", { d: "M4 8h3" }],
    ["path", { d: "M4 12h3" }],
    ["path", { d: "M4 16h3" }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "M20 6v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2" }],
    ["path", { d: "M10 16h6" }, { r: "growX", d: 0.1, o: [10, 16] }, "line"],
    ["path", { d: "M11 11a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", a: 0.15, o: [13, 11] }, "cut"],
    ["path", { d: "M4 8h3", fill: "none" }],
    ["path", { d: "M4 12h3", fill: "none" }],
    ["path", { d: "M4 16h3", fill: "none" }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
