import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "system-restart" (MIT, Copyright (c) 2021 Luca Burgio).
export const SystemRestart = createIcon("SystemRestart", "system-restart", {
  svg: { r: "spin", a: 360, o: [12, 12] },
  nodes: [
    ["path", { d: "M12 2V6" }, { r: "fade", d: 0.0 }],
    ["path", { d: "M12 18V22" }, { r: "fade", d: 0.28 }],
    ["path", { d: "M22 12H18" }, { r: "fade", d: 0.14 }],
    ["path", { d: "M6 12H2" }, { r: "fade", d: 0.42000000000000004 }],
    ["path", { d: "M4.92896 4.92896L7.75738 7.75738" }, { r: "fade", d: 0.49000000000000005 }],
    ["path", { d: "M16.2427 16.2427L19.0711 19.0711" }, { r: "fade", d: 0.21000000000000002 }],
    ["path", { d: "M19.071 4.92896L16.2426 7.75738" }, { r: "fade", d: 0.07 }],
    ["path", { d: "M7.75732 16.2427L4.9289 19.0711" }, { r: "fade", d: 0.35000000000000003 }],
  ],
});
