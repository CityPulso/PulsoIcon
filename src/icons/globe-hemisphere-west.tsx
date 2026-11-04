import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "globe-hemisphere-west" (MIT, Copyright (c) 2023 Phosphor Icons).
export const GlobeHemisphereWest = createIcon("GlobeHemisphereWest", "globe-hemisphere-west", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M5.6 4.3 7.5 8.5l3.5 1.5.5 3 2.5-2.5 2.5-.5L19 4.9" }, { r: "spin", a: -30, o: [12, 12] }],
    ["path", { d: "M13 21.9l1-3.4-1-2.5 3-1.5 2.5 1.5 3.1-1.2" }, { r: "spin", a: -30, o: [12, 12] }],
  ],
});
