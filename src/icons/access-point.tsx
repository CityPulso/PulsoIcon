import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "access-point" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const AccessPoint = createIcon("AccessPoint", "access-point", {
  nodes: [
    ["path", { d: "M12 12l0 .01" }, { r: "pop", d: 0, o: [12, 12] }],
    ["path", { d: "M14.828 9.172a4 4 0 0 1 0 5.656" }, { r: "fade", d: 0.1, o: [12, 12] }],
    ["path", { d: "M17.657 6.343a8 8 0 0 1 0 11.314" }, { r: "fade", d: 0.25, o: [12, 12] }],
    ["path", { d: "M9.168 14.828a4 4 0 0 1 0 -5.656" }, { r: "fade", d: 0.1, o: [12, 12] }],
    ["path", { d: "M6.337 17.657a8 8 0 0 1 0 -11.314" }, { r: "fade", d: 0.25, o: [12, 12] }],
  ],
});
