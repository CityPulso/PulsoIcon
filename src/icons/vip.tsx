import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "vip" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Vip = createIcon("Vip", "vip", {
  text: true,
  nodes: [
    ["path", { d: "M3 5h18" }, { r: "growX", o: [12, 5] }],
    ["path", { d: "M3 19h18" }, { r: "growX", o: [12, 19] }],
    ["path", { d: "M4 9l2 6h1l2 -6" }, { r: "pop", d: 0.1, o: [6.5, 12] }],
    ["path", { d: "M12 9v6" }, { r: "pop", d: 0.2, o: [12, 12] }],
    ["path", { d: "M16 15v-6h2a2 2 0 1 1 0 4h-2" }, { r: "pop", d: 0.3, o: [17.5, 12] }],
  ],
});
