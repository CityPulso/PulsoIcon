import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "load-balancer" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const LoadBalancer = createIcon("LoadBalancer", "load-balancer", {
  nodes: [
    ["path", { d: "M9 13a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "pulse", o: [12, 13] }],
    ["path", { d: "M11 20a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }],
    ["path", { d: "M12 16v3" }],
    ["path", { d: "M12 10v-7" }, { r: "slide", d: 0.1, y: -1, a: 1.5 }],
    ["path", { d: "M9 6l3 -3l3 3" }, { r: "slide", d: 0.1, y: -1, a: 1.5 }],
    ["path", { d: "M12 10v-7" }, { r: "slide", d: 0.1, y: -1, a: 1.5 }],
    ["path", { d: "M9 6l3 -3l3 3" }, { r: "slide", d: 0.1, y: -1, a: 1.5 }],
    ["path", { d: "M14.894 12.227l6.11 -2.224" }, { r: "slide", d: 0.1, x: 1, y: -0.35, a: 1.5 }],
    ["path", { d: "M17.159 8.21l3.845 1.793l-1.793 3.845" }, { r: "slide", d: 0.1, x: 1, y: -0.35, a: 1.5 }],
    ["path", { d: "M9.101 12.214l-6.075 -2.211" }, { r: "slide", d: 0.1, x: -1, y: -0.35, a: 1.5 }],
    ["path", { d: "M6.871 8.21l-3.845 1.793l1.793 3.845" }, { r: "slide", d: 0.1, x: -1, y: -0.35, a: 1.5 }],
  ],
});
