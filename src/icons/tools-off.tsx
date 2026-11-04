import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "tools-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ToolsOff = createIcon("ToolsOff", "tools-off", {
  nodes: [
    ["path", { d: "M16 12l4 -4a2.828 2.828 0 1 0 -4 -4l-4 4m-2 2l-7 7v4h4l7 -7" }, { r: "turn", a: -10, o: [5, 19] }],
    ["path", { d: "M14.5 5.5l4 4" }, { r: "turn", a: -10, o: [5, 19] }],
    ["path", { d: "M12 8l-5 -5m-2 2l-2 2l5 5" }, { r: "turn", a: 10, o: [19, 19] }],
    ["path", { d: "M7 8l-1.5 1.5" }, { r: "turn", a: 10, o: [19, 19] }],
    ["path", { d: "M16 12l5 5m-2 2l-2 2l-5 -5" }, { r: "turn", a: 10, o: [19, 19] }],
    ["path", { d: "M16 17l-1.5 1.5" }, { r: "turn", a: 10, o: [19, 19] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
