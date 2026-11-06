import { icon } from "../icon.js";

// Drawn after Phosphor Icons "trolley-suitcase" (MIT, Copyright (c) 2023 Phosphor Icons).

export const TrolleySuitcase = icon("TrolleySuitcase", "trolley-suitcase", {
  nodes: [
    ["path", { d: "M2 3l2 2v11h17" }, { r: "slide", x: 1, a: 1.5, o: [12, 11] }],
    ["rect", { x: "7.5", y: "8", width: "12", height: "5", rx: "1" }, { r: "slide", x: 1, a: 1.5, o: [12, 11] }],
    ["path", { d: "M11 8V6a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2" }, { r: "slide", x: 1, a: 1.5, o: [12, 11] }],
    ["circle", { cx: "7", cy: "19.5", r: "1.5" }, { r: "roll", x: 1, a: 1.5, o: [7, 19.5] }],
    ["circle", { cx: "18", cy: "19.5", r: "1.5" }, { r: "roll", x: 1, a: 1.5, o: [18, 19.5] }],
  ],
});
