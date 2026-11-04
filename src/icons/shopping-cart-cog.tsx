import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "shopping-cart-cog" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ShoppingCartCog = createIcon("ShoppingCartCog", "shopping-cart-cog", {
  nodes: [
    ["path", { d: "M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }],
    ["path", { d: "M12 17h-6v-14h-2" }],
    ["path", { d: "M6 5l14 1l-.79 5.526m-3.21 1.474h-10" }],
    ["path", { d: "M17.001 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "spin", a: 180, o: [19, 19] }],
    ["path", { d: "M19.001 15.5v1.5" }, { r: "spin", a: 180, o: [19, 19] }],
    ["path", { d: "M19.001 21v1.5" }, { r: "spin", a: 180, o: [19, 19] }],
    ["path", { d: "M22.032 17.25l-1.299 .75" }, { r: "spin", a: 180, o: [19, 19] }],
    ["path", { d: "M17.27 20l-1.3 .75" }, { r: "spin", a: 180, o: [19, 19] }],
    ["path", { d: "M15.97 17.25l1.3 .75" }, { r: "spin", a: 180, o: [19, 19] }],
    ["path", { d: "M20.733 20l1.3 .75" }, { r: "spin", a: 180, o: [19, 19] }],
  ],
});
