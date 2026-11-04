import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "access-point-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const AccessPointOff = createIcon("AccessPointOff", "access-point-off", {
  nodes: [
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M14.828 9.172a4 4 0 0 1 1.172 2.828" }, { r: "pulse", a: 0.12, o: [12, 12] }],
    ["path", { d: "M17.657 6.343a8 8 0 0 1 1.635 8.952" }, { r: "pulse", d: 0.12, a: 0.12, o: [12, 12] }],
    ["path", { d: "M9.168 14.828a4 4 0 0 1 0 -5.656" }, { r: "pulse", a: 0.12, o: [12, 12] }],
    ["path", { d: "M6.337 17.657a8 8 0 0 1 0 -11.314" }, { r: "pulse", d: 0.12, a: 0.12, o: [12, 12] }],
  ],
});
