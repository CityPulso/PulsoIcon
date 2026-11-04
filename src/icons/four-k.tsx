import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "four-k" (MIT, Copyright (c) 2023 Phosphor Icons).
export const FourK = createIcon("FourK", "four-k", {
  nodes: [
    ["path", { d: "M3 4h18" }, { r: "growX", o: [3, 4] }],
    ["path", { d: "M3 20h18" }, { r: "growX", d: 0.1, o: [3, 20] }],
    ["path", { d: "M10.5 16V8L4 14h7.5" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M14 8v8M20 8l-6 5M16 11.5l4 4.5" }, { r: "draw", d: 0.3 }],
  ],
});
