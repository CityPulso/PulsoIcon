import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "cow" (MIT, Copyright (c) 2023 Phosphor Icons).

export const Cow = createIcon("Cow", "cow", {
  nodes: [
    ["path", { d: "M8.5 6.4C7.5 5.6 7 4.5 7 3" }, { r: "tilt", a: 6, o: [12, 21] }],
    ["path", { d: "M15.5 6.4c1-.8 1.5-1.9 1.5-3.4" }, { r: "tilt", a: 6, o: [12, 21] }],
    ["path", { d: "M7 8H4.5a1.5 1.5 0 0 0 0 3H7" }, { r: "tilt", a: 6, o: [12, 21] }],
    ["path", { d: "M17 8h2.5a1.5 1.5 0 0 1 0 3H17" }, { r: "tilt", a: 6, o: [12, 21] }],
    ["path", { d: "M7 13.5V9a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v4.5" }, { r: "tilt", a: 6, o: [12, 21] }],
    ["rect", { x: "6", y: "13", width: "12", height: "8", rx: "4" }, { r: "tilt", a: 6, o: [12, 21] }],
    ["path", { d: "M10 10h.01" }, { r: "blink", d: 0.2, o: [10.005, 10] }],
    ["path", { d: "M14 10h.01" }, { r: "blink", d: 0.2, o: [14.005, 10] }],
    ["path", { d: "M10 17h.01" }, { r: "pulse", d: 0.1, o: [12, 17] }],
    ["path", { d: "M14 17h.01" }, { r: "pulse", d: 0.1, o: [12, 17] }],
  ],
});
