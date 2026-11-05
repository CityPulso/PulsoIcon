import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "ironing-steam-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const IroningSteamOff = createIcon("IroningSteamOff", "ironing-steam-off", {
  nodes: [
    ["path", { d: "M9 4h7.459a3 3 0 0 1 2.959 2.507l.577 3.464l.81 4.865a1 1 0 0 1 -.821 1.15" }, { r: "slide", x: 1, a: 1, o: [12, 12] }],
    ["path", { d: "M16 16h-13a7 7 0 0 1 6.056 -6.937" }, { r: "slide", x: 1, a: 1, o: [12, 12] }],
    ["path", { d: "M13 9h6.8" }, { r: "slide", x: 1, a: 1, o: [12, 12] }],
    ["path", { d: "M12 19v2" }, { r: "float", d: 0.1, o: [12, 20] }],
    ["path", { d: "M8 19l-1 2" }, { r: "float", d: 0.2, o: [7.5, 20] }],
    ["path", { d: "M16 19l1 2" }, { r: "float", d: 0.3, o: [16.5, 20] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
  solid: [
    ["path", { d: "M12 19v2", fill: "none" }, { r: "float", d: 0.1, o: [12, 20] }],
    ["path", { d: "M9 4h7.459a3 3 0 0 1 2.959 2.507l.577 3.464l.81 4.865a1 1 0 0 1 -.985 1.164h-16.82a7 7 0 0 1 7 -7h9.8", fill: "none" }, { r: "slide", x: 1, a: 1, o: [12, 12] }],
    ["path", { d: "M8 19l-1 2", fill: "none" }, { r: "float", d: 0.2, o: [7.5, 20] }],
    ["path", { d: "M16 19l1 2", fill: "none" }, { r: "float", d: 0.3, o: [16.5, 20] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
