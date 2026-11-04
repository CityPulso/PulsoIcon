import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "brand-threejs" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BrandThreejs = createIcon("BrandThreejs", "brand-threejs", {
  nodes: [
    ["path", { d: "M8 22l-5 -19l19 5.5l-14 13.5" }],
    ["path", { d: "M12.573 17.58l-6.152 -1.576l8.796 -9.466l1.914 6.64" }, { r: "draw" }],
    ["path", { d: "M12.573 17.58l-1.573 -6.58l6.13 2.179" }, { r: "pop", d: 0.2, o: [13.5, 14] }],
    ["path", { d: "M9.527 4.893l1.473 6.107l-6.31 -1.564l4.837 -4.543" }, { r: "pop", d: 0.1, o: [8.5, 8] }],
  ],
});
