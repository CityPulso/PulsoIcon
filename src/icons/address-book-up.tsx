import { createIcon } from "../runtime/createIcon.js";

export const AddressBookUp = createIcon("AddressBookUp", "address-book-up", {
  nodes: [
    ["path", { d: "M14 20H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["circle", { cx: "12", cy: "10", r: "2" }, { r: "pop", d: 0.05, o: [12, 10] }],
    ["path", { d: "M9.5 15h5" }, { r: "growX", d: 0.1, o: [12, 15] }],
    ["path", { d: "M4 8h3" }, { r: "slide", d: 0.05, x: -1, a: 1, o: [5.5, 8] }],
    ["path", { d: "M4 12h3" }, { r: "slide", d: 0.1, x: -1, a: 1, o: [5.5, 12] }],
    ["path", { d: "M4 16h3" }, { r: "slide", d: 0.15, x: -1, a: 1, o: [5.5, 16] }],
    ["path", { d: "M19 22v-7" }, { r: "bounce", d: 0.1, y: -1, a: 1.5, o: [19, 18] }],
    ["path", { d: "m16 18 3-3 3 3" }, { r: "bounce", d: 0.1, y: -1, a: 1.5, o: [19, 18] }],
  ],
});
