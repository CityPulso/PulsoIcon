import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "remote-control" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const RemoteControl = createIcon("RemoteControl", "remote-control", {
  nodes: [
    ["path", { d: "M9 14a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2v-5" }, { r: "press", a: 0.06, o: [12, 16.5] }],
    ["path", { d: "M20 9c-.914 -3.455 -4.15 -6 -8 -6c-3.853 0 -7.089 2.542 -8 6" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M15 9c-.69 -1.2 -1.517 -2 -3 -2s-2.31 .801 -3 2" }, { r: "draw", d: 0.05 }],
  ],
});
