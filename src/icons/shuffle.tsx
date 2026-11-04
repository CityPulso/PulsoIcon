import { createIcon } from "../runtime/createIcon.js";

export const Shuffle = createIcon("Shuffle", "shuffle", {
  nodes: [
    ["path", { d: "m18 14 4 4-4 4" }, { r: "slide", x: 1, a: 1.5, o: [17.15, 18] }],
    ["path", { d: "m18 2 4 4-4 4" }, { r: "slide", d: 0.1, x: 1, a: 1.5, o: [12, 10] }],
    ["path", { d: "M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22" }, { r: "slide", d: 0.1, x: 1, a: 1.5, o: [12, 10] }],
    ["path", { d: "M2 6h1.972a4 4 0 0 1 3.6 2.2" }, { r: "slide", d: 0.1, x: 1, a: 1.5, o: [12, 10] }],
    ["path", { d: "M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45" }, { r: "slide", x: 1, a: 1.5, o: [17.15, 18] }],
  ],
});
