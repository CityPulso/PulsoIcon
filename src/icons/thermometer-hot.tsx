import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "thermometer-hot" (MIT, Copyright (c) 2023 Phosphor Icons).
export const ThermometerHot = createIcon("ThermometerHot", "thermometer-hot", {
  nodes: [
    ["path", { d: "M10 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" }, { r: "pulse", a: 0.06, o: [8, 18] }],
    ["path", { d: "M15 7c1-1 2-1 3 0s2 1 3 0" }, { r: "float", d: 0.1, a: 1.5, o: [18, 7] }],
    ["path", { d: "M15 11c1-1 2-1 3 0s2 1 3 0" }, { r: "float", d: 0.2, a: 1.5, o: [18, 11] }],
  ],
});
