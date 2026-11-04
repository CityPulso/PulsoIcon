import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "device-rotate" (MIT, Copyright (c) 2023 Phosphor Icons).

export const DeviceRotate = createIcon("DeviceRotate", "device-rotate", {
  nodes: [
    ["path", { d: "M18 15V6a1 1 0 0 0-1-1H6" }, { r: "draw" }],
    ["path", { d: "M9 2 6 5l3 3" }, { r: "pop", d: 0.3, o: [6, 5] }],
    ["path", { d: "M6 9v9a1 1 0 0 0 1 1h11" }, { r: "draw" }],
    ["path", { d: "m15 16 3 3-3 3" }, { r: "pop", d: 0.3, o: [18, 19] }],
  ],
});
