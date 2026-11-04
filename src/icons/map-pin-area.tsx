import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "map-pin-area" (MIT, Copyright (c) 2023 Phosphor Icons).

export const MapPinArea = createIcon("MapPinArea", "map-pin-area", {
  nodes: [
    ["path", { d: "M18 8c0 3.6-3.7 7.1-5.4 8.6a1 1 0 0 1-1.2 0C9.7 15.1 6 11.6 6 8a6 6 0 0 1 12 0" }, { r: "bounce", y: -1, a: 2, o: [12, 10] }],
    ["circle", { cx: "12", cy: "8", r: "2" }, { r: "pop", d: 0.15, o: [12, 8] }],
    ["path", { d: "M8 15.6C4.9 16.1 3 17 3 18c0 1.7 4 3 9 3s9-1.3 9-3c0-1-1.9-1.9-5-2.4" }, { r: "pulse", d: 0.1, a: 0.08, o: [12, 18] }],
  ],
});
