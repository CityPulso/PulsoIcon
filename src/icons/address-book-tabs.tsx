import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "address-book-tabs" (MIT, Copyright (c) 2023 Phosphor Icons).
export const AddressBookTabs = createIcon("AddressBookTabs", "address-book-tabs", {
  nodes: [
    ["rect", { x: "3", y: "2", width: "18", height: "20", rx: "2" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M17 2v20" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M17 7h4" }, { r: "slide", d: 0.05, x: 1, a: 1, o: [19, 7] }],
    ["path", { d: "M17 12h4" }, { r: "slide", d: 0.1, x: 1, a: 1, o: [19, 12] }],
    ["path", { d: "M17 17h4" }, { r: "slide", d: 0.15, x: 1, a: 1, o: [19, 17] }],
    ["circle", { cx: "10", cy: "9", r: "2.5" }, { r: "float", d: 0.1, o: [10, 9] }],
    ["path", { d: "M6 17a4 4 0 0 1 8 0" }, { r: "rise", d: 0.15, a: 1, o: [10, 15] }],
  ],
});
