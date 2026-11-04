import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "currency-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CurrencyOff = createIcon("CurrencyOff", "currency-off", {
  nodes: [
    ["path", { d: "M18.531 14.524a7 7 0 0 0 -9.06 -9.053m-2.422 1.582a7 7 0 0 0 9.903 9.896" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M4 4l3 3" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M20 4l-3 3" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M4 20l3 -3" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M20 20l-3 -3" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
