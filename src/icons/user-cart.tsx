import { createIcon } from "../runtime/createIcon.js";

export const UserCart = createIcon("UserCart", "user-cart", {
  nodes: [
    ["path", { d: "M10 15H6a4 4 0 0 0-4 4v2" }, { r: "float", a: 1.5, o: [8.5, 12] }],
    ["circle", { cx: "9", cy: "7", r: "4" }, { r: "float", a: 1.5, o: [8.5, 12] }],
    ["path", { d: "M13 12h1.5l1.5 6h5l1-4.5H14.6" }, { r: "slide", d: 0.1, x: 1, a: 1.5, o: [17, 16.5] }],
    ["path", { d: "M16 21h.01" }, { r: "slide", d: 0.1, x: 1, a: 1.5, o: [17, 16.5] }],
    ["path", { d: "M21 21h.01" }, { r: "slide", d: 0.1, x: 1, a: 1.5, o: [17, 16.5] }],
  ],
});
