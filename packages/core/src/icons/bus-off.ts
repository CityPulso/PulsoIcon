import { icon } from "../icon.js";

// Adapted from Tabler Icons "bus-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BusOff = icon("BusOff", "bus-off", {
  nodes: [
    ["path", { d: "M4 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "spin", d: 0, o: [6, 17] }],
    ["path", { d: "M16.18 16.172a2 2 0 0 0 2.652 2.648" }, { r: "spin", d: 0, o: [18, 17] }],
    ["path", { d: "M4 17h-2v-11a1 1 0 0 1 1 -1h2m4 0h8c2.761 0 5 3.134 5 7v5h-1m-5 0h-8" }, { r: "slide", d: 0, x: 1, y: 0, a: 1 }],
    ["path", { d: "M16 5l1.5 7h4.5" }, { r: "slide", d: 0, x: 1, y: 0, a: 1 }],
    ["path", { d: "M2 10h8m4 0h3" }, { r: "slide", d: 0, x: 1, y: 0, a: 1 }],
    ["path", { d: "M7 7v3" }, { r: "slide", d: 0, x: 1, y: 0, a: 1 }],
    ["path", { d: "M12 5v3" }, { r: "slide", d: 0, x: 1, y: 0, a: 1 }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "M8 6v6" }, { r: "slide", d: 0, x: 1, y: 0, a: 1 }, "line"],
    ["path", { d: "M15 6v6" }, { r: "slide", d: 0, x: 1, y: 0, a: 1 }, "line"],
    ["path", { d: "M2 12h19.6" }, { r: "slide", d: 0, x: 1, y: 0, a: 1 }, "line"],
    ["path", { d: "M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3" }, { r: "slide", d: 0, x: 1, y: 0, a: 1 }],
    ["circle", { cx: "7", cy: "18", r: "2" }, { r: "spin", d: 0, o: [6, 17] }, "line"],
    ["path", { d: "M9 18h5", fill: "none" }, { r: "spin", d: 0, o: [6, 17] }],
    ["circle", { cx: "16", cy: "18", r: "2" }, { r: "spin", d: 0, o: [18, 17] }, "line"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
