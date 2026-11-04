import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "sun-horizon" (MIT, Copyright (c) 2023 Phosphor Icons).
export const SunHorizon = createIcon("SunHorizon", "sun-horizon", {
  nodes: [
    ["path", { d: "M17 16a5 5 0 0 0-10 0" }, { r: "rise", a: 3, o: [12, 13.5] }],
    ["path", { d: "M12 9V7" }, { r: "fade", d: 0.2, o: [12, 8] }],
    ["path", { d: "m6.7 10.7-1.4-1.4" }, { r: "fade", d: 0.15, o: [6, 10] }],
    ["path", { d: "m17.3 10.7 1.4-1.4" }, { r: "fade", d: 0.25, o: [18, 10] }],
    ["path", { d: "M2 16h20" }, { r: "growX", o: [12, 16] }],
    ["path", { d: "M6 20h12" }, { r: "growX", d: 0.08, o: [12, 20] }],
  ],
});
