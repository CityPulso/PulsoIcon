import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "road-horizon" (MIT, Copyright (c) 2023 Phosphor Icons).
export const RoadHorizon = createIcon("RoadHorizon", "road-horizon", {
  nodes: [
    ["path", { d: "M2 4h20" }, { r: "drawOut", o: [12, 4] }],
    ["path", { d: "M8 4 3 20" }, { r: "draw", d: 0.1, o: [5.5, 12] }],
    ["path", { d: "M16 4l5 16" }, { r: "draw", d: 0.1, o: [18.5, 12] }],
    ["path", { d: "M12 7.5v1.5" }, { r: "slide", d: 0.2, y: 1, a: 1.2, o: [12, 8.25] }],
    ["path", { d: "M12 12v2" }, { r: "slide", d: 0.25, y: 1, a: 1.5, o: [12, 13] }],
    ["path", { d: "M12 17.5v2.5" }, { r: "slide", d: 0.3, y: 1, a: 1, o: [12, 18.75] }],
  ],
});
