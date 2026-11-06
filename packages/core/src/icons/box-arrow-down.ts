import { icon } from "../icon.js";

// Drawn after Phosphor Icons "box-arrow-down" (MIT, Copyright (c) 2023 Phosphor Icons).

export const BoxArrowDown = icon("BoxArrowDown", "box-arrow-down", {
  nodes: [
    ["path", { d: "M21 8v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8" }, { r: "press", a: 0.04, o: [12, 21] }],
    ["path", { d: "M3 8l1.6-3.2A1.5 1.5 0 0 1 6 4h12a1.5 1.5 0 0 1 1.4.8L21 8z" }, { r: "press", a: 0.04, o: [12, 21] }],
    ["path", { d: "M12 11v7" }, { r: "draw", d: 0.1 }],
    ["path", { d: "m9 15 3 3 3-3" }, { r: "slide", d: 0.1, y: 1, a: 1, o: [12, 16.5] }],
  ],
});
