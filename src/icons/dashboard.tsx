import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "dashboard" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Dashboard = createIcon("Dashboard", "dashboard", {
  nodes: [
    ["path", { d: "M10 13a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }],
    ["path", { d: "M13.45 11.55l2.05 -2.05" }, { r: "swing", a: 25, o: [12, 13] }],
    ["path", { d: "M6.4 20a9 9 0 1 1 11.2 0l-11.2 0" }],
  ],
});
