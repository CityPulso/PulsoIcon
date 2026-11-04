import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "testinglibrary" (CC0-1.0). Testing Library is a trademark of its owner.

export const BrandTestingLibrary = createIcon("BrandTestingLibrary", "brand-testing-library", {
  nodes: [
    ["path", { d: "M7 9.5a5 5 0 0 1 10 0c0 2.5-1 4-2.5 4.5h-5C8 13.5 7 12 7 9.5z" }, { r: "float", a: 1, o: [12, 9] }],
    ["path", { d: "M10 9h.01" }, { r: "blink", o: [10, 9] }],
    ["path", { d: "M14 9h.01" }, { r: "blink", o: [14, 9] }],
    ["path", { d: "M9 14c-1 3-3.5 4-6 3" }, { r: "wobble", a: 8, o: [9, 14] }],
    ["path", { d: "M11 14.5c0 3-1 5-3 6.5" }, { r: "wobble", d: 0.05, a: 8, o: [11, 14.5] }],
    ["path", { d: "M13 14.5c0 3 1 5 3 6.5" }, { r: "wobble", d: 0.1, a: 8, o: [13, 14.5] }],
    ["path", { d: "M15 14c1 3 3.5 4 6 3" }, { r: "wobble", d: 0.15, a: 8, o: [15, 14] }],
  ],
});
