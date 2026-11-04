import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "device-mobile-cog" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SmartphoneCog = createIcon("SmartphoneCog", "smartphone-cog", {
  nodes: [
    ["path", { d: "M12 21h-4a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v6.5" }],
    ["path", { d: "M11 4h2" }],
    ["path", { d: "M12 17v.01" }],
    ["path", { d: "M17.001 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "spin", d: 0.1, a: 180, o: [19.001, 19] }],
    ["path", { d: "M19.001 15.5v1.5" }, { r: "spin", d: 0.1, a: 180, o: [19.001, 19] }],
    ["path", { d: "M19.001 21v1.5" }, { r: "spin", d: 0.1, a: 180, o: [19.001, 19] }],
    ["path", { d: "M22.032 17.25l-1.299 .75" }, { r: "spin", d: 0.1, a: 180, o: [19.001, 19] }],
    ["path", { d: "M17.27 20l-1.3 .75" }, { r: "spin", d: 0.1, a: 180, o: [19.001, 19] }],
    ["path", { d: "M15.97 17.25l1.3 .75" }, { r: "spin", d: 0.1, a: 180, o: [19.001, 19] }],
    ["path", { d: "M20.733 20l1.3 .75" }, { r: "spin", d: 0.1, a: 180, o: [19.001, 19] }],
  ],
});
