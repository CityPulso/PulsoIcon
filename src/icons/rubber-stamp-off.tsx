import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "rubber-stamp-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const RubberStampOff = createIcon("RubberStampOff", "rubber-stamp-off", {
  nodes: [
    ["path", { d: "M8.273 8.273c.805 2.341 2.857 5.527 -1.484 5.527c-2.368 0 -3.789 0 -3.789 4.05h14.85" }, { r: "stamp", o: [12, 12] }],
    ["path", { d: "M5 21h14" }, { r: "pulse", d: 0.2, a: 0.1, o: [12, 21] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
    [
      "path",
      { d: "M8.712 4.722a3.99 3.99 0 0 1 3.288 -1.722a4 4 0 0 1 4 4c0 .992 -.806 2.464 -1.223 3.785m6.198 6.196c-.182 -2.883 -1.332 -3.153 -3.172 -3.178" },
      { r: "stamp", o: [12, 12] },
    ],
  ],
  solid: [
    ["path", { d: "M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-6 0c0 2 1 2 1 3.5V13" }, { r: "stamp", o: [12, 12] }],
    ["path", { d: "M20 15.5a2.5 2.5 0 0 0-2.5-2.5h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1z" }, { r: "stamp", o: [12, 12] }],
    ["path", { d: "M5 22h14", fill: "none" }, { r: "pulse", d: 0.2, a: 0.1, o: [12, 21] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
