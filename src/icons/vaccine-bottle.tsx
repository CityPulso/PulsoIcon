import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "vaccine-bottle" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const VaccineBottle = createIcon("VaccineBottle", "vaccine-bottle", {
  nodes: [
    ["path", { d: "M9 4a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -1" }, { r: "lift", y: -1 }],
    [
      "path",
      {
        d: "M10 6v.98c0 .877 -.634 1.626 -1.5 1.77c-.866 .144 -1.5 .893 -1.5 1.77v8.48a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-8.48c0 -.877 -.634 -1.626 -1.5 -1.77a1.795 1.795 0 0 1 -1.5 -1.77v-.98",
      },
      { r: "wobble", d: 0.1, o: [12, 20] },
    ],
    ["path", { d: "M7 12h10" }, { r: "wobble", d: 0.1, o: [12, 20] }],
    ["path", { d: "M7 18h10" }, { r: "wobble", d: 0.1, o: [12, 20] }],
    ["path", { d: "M11 15h2" }, { r: "growX", d: 0.25, o: [11, 15] }],
  ],
});
