import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "air-balloon" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const AirBalloon = createIcon("AirBalloon", "air-balloon", {
  nodes: [
    ["path", { d: "M9 21v-3h6v3a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1" }, { r: "float", a: 2 }],
    ["path", { d: "M9 18c-2.347 -2.169 -5 -5.226 -5 -8a8 8 0 1 1 16 0c0 2.774 -2.653 5.831 -5 8" }, { r: "float", a: 2 }],
    ["path", { d: "M5.5 14h13" }, { r: "float", a: 2 }],
    ["path", { d: "M10 14c-1.69 -4.712 -.924 -8.197 0 -11.602" }, { r: "float", a: 2 }],
    ["path", { d: "M14 14c1.469 -3.867 1.19 -7.735 0 -11.602" }, { r: "float", a: 2 }],
  ],
});
