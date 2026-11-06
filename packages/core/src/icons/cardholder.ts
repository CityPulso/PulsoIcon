import { icon } from "../icon.js";

// Drawn after Phosphor Icons "cardholder" (MIT, Copyright (c) 2023 Phosphor Icons).
export const Cardholder = icon("Cardholder", "cardholder", {
  nodes: [
    ["rect", { x: "2", y: "5", width: "20", height: "14", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M2 9h20" }, { r: "slide", d: 0.05, y: -1, a: 1.5, o: [12, 9] }],
    ["path", { d: "M2 12.5h5a5 3 0 0 0 10 0h5" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
