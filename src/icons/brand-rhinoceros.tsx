import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "rhinoceros" (CC0-1.0). Rhinoceros is a trademark of its owner.

export const BrandRhinoceros = createIcon("BrandRhinoceros", "brand-rhinoceros", {
  nodes: [
    [
      "path",
      { d: "M2.5 14.5C2.5 11 5.5 8 9.5 8c2 0 3 .5 4.5.5l2-1.5.5-3.5 1.5 4 2.5 3c1 1.5.5 3-1.5 3h-1.5l-1 3h-2l-.5-2.5h-4L9.5 19h-2L7 16c-2.5 0-4.5-.5-4.5-1.5z" },
      { r: "tilt", a: 5, o: [9, 17] },
    ],
    ["path", { d: "M16 11h.01" }, { r: "blink", d: 0.2, o: [16, 11] }],
  ],
});
