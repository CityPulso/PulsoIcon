import { icon } from "../icon.js";

// Adapted from Tabler Icons "cursor-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CursorOff = icon("CursorOff", "cursor-off", {
  nodes: [
    ["path", { d: "M9 4a3 3 0 0 1 3 3v1m0 9a3 3 0 0 1 -3 3" }, { r: "blink", o: [12, 12] }],
    ["path", { d: "M15 4a3 3 0 0 0 -3 3v1m0 4v5a3 3 0 0 0 3 3" }, { r: "blink", o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
  solid: [
    ["path", { d: "M12 2 21 7v10l-9 5-9-5V7z" }, { r: "blink", o: [12, 12] }],
    ["path", { d: "M3 7l9 5 9-5" }, { r: "blink", o: [12, 12] }, "line"],
    ["path", { d: "M12 12v10" }, { r: "blink", o: [12, 12] }, "line"],
    ["path", { d: "M12 12l5.5 3" }, { r: "blink", o: [12, 12] }, "line"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
