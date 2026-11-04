import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "sun-electricity" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SunElectricity = createIcon("SunElectricity", "sun-electricity", {
  nodes: [
    ["path", { d: "M8 12a4 4 0 0 0 4 4m0 -8a4 4 0 0 0 -4 4" }, { r: "pulse", d: 0, a: 0.1, o: [10, 12] }],
    ["path", { d: "M3 12h1" }, { r: "pop", d: 0.05, o: [3.5, 12] }],
    ["path", { d: "M12 3v1" }, { r: "pop", d: 0.1, o: [12, 3.5] }],
    ["path", { d: "M12 20v1" }, { r: "pop", d: 0.1, o: [12, 20.5] }],
    ["path", { d: "M5.6 5.6l.7 .7" }, { r: "pop", d: 0.1, o: [6, 6] }],
    ["path", { d: "M6.3 17.7l-.7 .7" }, { r: "pop", d: 0.1, o: [6, 18] }],
    ["path", { d: "M20 7l-3 5h4l-3 5" }, { r: "flicker", d: 0.15, o: [19, 12] }],
  ],
});
