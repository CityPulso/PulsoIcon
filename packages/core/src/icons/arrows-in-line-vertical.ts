import { icon } from "../icon.js";

// Drawn after Phosphor Icons "arrows-in-line-vertical" (MIT, Copyright (c) 2023 Phosphor Icons).
export const ArrowsInLineVertical = icon("ArrowsInLineVertical", "arrows-in-line-vertical", {
  nodes: [
    ["path", { d: "M3 12h18" }, { r: "growX", o: [12, 12] }],
    ["path", { d: "M12 3v6" }, { r: "slide", y: 1, a: 1.5, o: [12, 6] }],
    ["path", { d: "m9 6 3 3 3-3" }, { r: "slide", y: 1, a: 1.5, o: [12, 6] }],
    ["path", { d: "M12 21v-6" }, { r: "slide", y: -1, a: 1.5, o: [12, 18] }],
    ["path", { d: "m9 18 3-3 3 3" }, { r: "slide", y: -1, a: 1.5, o: [12, 18] }],
  ],
});
