import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "globe-hemisphere-east" (MIT, Copyright (c) 2023 Phosphor Icons).
export const GlobeHemisphereEast = createIcon("GlobeHemisphereEast", "globe-hemisphere-east", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M2.8 16 6 14l1-3.5 3-1 1.5-3H16l1.5-2.4" }, { r: "spin", a: -30, o: [12, 12] }],
    ["path", { d: "M15 15.5l2.5-1.5 2.5 1.5-1 2.5H16Z" }, { r: "spin", a: -30, o: [12, 12] }],
  ],
});
