import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "file-dashed" (MIT, Copyright (c) 2023 Phosphor Icons).
export const FileDashed = createIcon("FileDashed", "file-dashed", {
  nodes: [
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }, { r: "fold", o: [17, 5] }],
    ["path", { d: "M8 2H6a2 2 0 0 0-2 2v2" }, { r: "draw", d: 0 }],
    ["path", { d: "M4 10v4" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M4 18v2a2 2 0 0 0 2 2h2" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M11 22h2" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M16 22h2a2 2 0 0 0 2-2v-2" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M20 13.5v3" }, { r: "draw", d: 0.25 }],
    ["path", { d: "M20 10V8a2.4 2.4 0 0 0-.706-1.704l-3.588-3.588A2.4 2.4 0 0 0 14 2h-2" }, { r: "draw", d: 0.3 }],
  ],
});
