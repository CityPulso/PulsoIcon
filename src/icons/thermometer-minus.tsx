import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "temperature-minus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ThermometerMinus = createIcon("ThermometerMinus", "thermometer-minus", {
  nodes: [
    ["path", { d: "M8 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" }],
    ["path", { d: "M8 9l4 0" }, { r: "slide", y: 1, a: 1.5, o: [10, 9] }],
    ["path", { d: "M16 9l6 0" }, { r: "pop", d: 0.15, o: [19, 9] }],
  ],
});
