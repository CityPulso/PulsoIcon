import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "airplane-taxiing" (MIT, Copyright (c) 2023 Phosphor Icons).
export const AirplaneTaxiing = createIcon("AirplaneTaxiing", "airplane-taxiing", {
  nodes: [
    ["path", { d: "M3 4h2l3 5h11a3 3 0 0 1 0 6H8l-5-4z" }, { r: "slide", x: 1, a: 1.5, o: [12, 10] }],
    ["path", { d: "M11 9 9.5 5H12l4 4" }, { r: "slide", x: 1, a: 1.5, o: [12, 10] }],
    ["circle", { cx: "9", cy: "19", r: "1" }, { r: "slide", x: 1, a: 1.5, o: [9, 19] }],
    ["circle", { cx: "17", cy: "19", r: "1" }, { r: "slide", x: 1, a: 1.5, o: [17, 19] }],
  ],
});
