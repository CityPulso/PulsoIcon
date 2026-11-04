import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "arrows-in-cardinal" (MIT, Copyright (c) 2023 Phosphor Icons).
export const ArrowsInCardinal = createIcon("ArrowsInCardinal", "arrows-in-cardinal", {
  nodes: [
    ["path", { d: "M12 2v7" }, { r: "slide", y: 1, a: 1.5, o: [12, 5.5] }],
    ["path", { d: "m9 6 3 3 3-3" }, { r: "slide", y: 1, a: 1.5, o: [12, 5.5] }],
    ["path", { d: "M12 22v-7" }, { r: "slide", y: -1, a: 1.5, o: [12, 18.5] }],
    ["path", { d: "m9 18 3-3 3 3" }, { r: "slide", y: -1, a: 1.5, o: [12, 18.5] }],
    ["path", { d: "M2 12h7" }, { r: "slide", x: 1, a: 1.5, o: [5.5, 12] }],
    ["path", { d: "m6 9 3 3-3 3" }, { r: "slide", x: 1, a: 1.5, o: [5.5, 12] }],
    ["path", { d: "M22 12h-7" }, { r: "slide", x: -1, a: 1.5, o: [18.5, 12] }],
    ["path", { d: "m18 9-3 3 3 3" }, { r: "slide", x: -1, a: 1.5, o: [18.5, 12] }],
  ],
});
