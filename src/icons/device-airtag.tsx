import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "device-airtag" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DeviceAirtag = createIcon("DeviceAirtag", "device-airtag", {
  nodes: [
    ["path", { d: "M4 12a8 8 0 1 0 16 0a8 8 0 0 0 -16 0" }],
    ["path", { d: "M9 15v.01" }, { r: "pop", d: 0, o: [9, 15] }],
    ["path", { d: "M15 15a6 6 0 0 0 -6 -6" }, { r: "fade", d: 0.25, o: [9, 15] }],
    ["path", { d: "M12 15a3 3 0 0 0 -3 -3" }, { r: "fade", d: 0.1, o: [9, 15] }],
  ],
});
