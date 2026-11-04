import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "package-import" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PackageImport = createIcon("PackageImport", "package-import", {
  nodes: [
    ["path", { d: "M12 21l-8 -4.5v-9l8 -4.5l8 4.5v4.5" }],
    ["path", { d: "M12 12l8 -4.5" }],
    ["path", { d: "M12 12v9" }],
    ["path", { d: "M12 12l-8 -4.5" }],
    ["path", { d: "M22 18h-7" }, { r: "slide", x: -1, y: 0, a: 1.5 }],
    ["path", { d: "M18 15l-3 3l3 3" }, { r: "slide", x: -1, y: 0, a: 1.5 }],
  ],
});
