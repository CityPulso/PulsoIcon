import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "joker" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Joker = createIcon("Joker", "joker", {
  nodes: [
    ["path", { d: "M5 17.5a1.5 1.5 0 0 1 1.5 -1.5h11a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1 -1.5 1.5h-11a1.5 1.5 0 0 1 -1.5 -1.5" }],
    ["path", { d: "M12 16q -2.5 -8 -6 -8q -2.5 0 -3 2c2.953 .31 3.308 3.33 4 6" }, { r: "swing", a: -10, o: [12, 16] }],
    ["path", { d: "M12 16q 2.5 -8 6 -8q 2.5 0 3 2c-2.953 .31 -3.308 3.33 -4 6" }, { r: "swing", a: 10, o: [12, 16] }],
    ["path", { d: "M9 9.5q 2 -3.5 3 -3.5t 3 3.5" }, { r: "swing", d: 0.05, a: 6, o: [12, 16] }],
  ],
});
