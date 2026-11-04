import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "cloud-data-connection" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CloudDataConnection = createIcon("CloudDataConnection", "cloud-data-connection", {
  nodes: [
    [
      "path",
      {
        d: "M5 9.897c0 -1.714 1.46 -3.104 3.26 -3.104c.275 -1.22 1.255 -2.215 2.572 -2.611c1.317 -.397 2.77 -.134 3.811 .69c1.042 .822 1.514 2.08 1.239 3.3h.693a2.42 2.42 0 0 1 2.425 2.414a2.42 2.42 0 0 1 -2.425 2.414h-8.315c-1.8 0 -3.26 -1.39 -3.26 -3.103",
      },
      { r: "float" },
    ],
    ["path", { d: "M12 13v3" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M10 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "pop", d: 0.2, o: [12, 18] }],
    ["path", { d: "M14 18h7" }, { r: "draw", d: 0.3 }],
    ["path", { d: "M3 18h7" }, { r: "draw", d: 0.3 }],
  ],
});
