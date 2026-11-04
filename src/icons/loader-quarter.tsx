import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "loader-quarter" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const LoaderQuarter = createIcon("LoaderQuarter", "loader-quarter", {
  nodes: [
    ["path", { d: "M12 6l0 -3" }, { r: "spin", o: [12, 12] }],
    ["path", { d: "M6 12l-3 0" }, { r: "spin", o: [12, 12] }],
    ["path", { d: "M7.75 7.75l-2.15 -2.15" }, { r: "spin", o: [12, 12] }],
  ],
});
