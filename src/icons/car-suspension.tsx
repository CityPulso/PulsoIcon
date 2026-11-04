import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "car-suspension" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CarSuspension = createIcon("CarSuspension", "car-suspension", {
  nodes: [
    ["path", { d: "M12 22a3 3 0 1 1 0 -6a3 3 0 0 1 0 6" }, { r: "bounce", y: -1, a: 1 }],
    ["path", { d: "M12 16v-12" }],
    ["path", { d: "M13 2h-2v2h2v-2" }],
    ["path", { d: "M9 11l6 -1" }, { r: "blink", o: [12, 10.5] }],
    ["path", { d: "M9 14l6 -1" }, { r: "blink", o: [12, 10.5] }],
    ["path", { d: "M9 8l6 -1" }, { r: "blink", o: [12, 10.5] }],
  ],
});
