import { icon } from "../icon.js";

// Drawn after Phosphor Icons "seatbelt" (MIT, Copyright (c) 2023 Phosphor Icons).
export const Seatbelt = icon("Seatbelt", "seatbelt", {
  nodes: [
    ["circle", { cx: "12", cy: "6", r: "3" }, { r: "float", a: 1, o: [12, 6] }],
    ["path", { d: "M5 20a7 7 0 0 1 9.7-6.5" }, { r: "press", a: 0.04, o: [12, 20] }],
    ["path", { d: "M18.4 16.8A7 7 0 0 1 19 20" }, { r: "press", a: 0.04, o: [12, 20] }],
    ["path", { d: "M8 20 18.5 12" }, { r: "draw", d: 0.15, o: [13.25, 16] }],
  ],
});
