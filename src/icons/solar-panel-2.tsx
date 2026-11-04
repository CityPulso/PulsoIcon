import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "solar-panel-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SolarPanel2 = createIcon("SolarPanel2", "solar-panel-2", {
  nodes: [
    ["path", { d: "M8 2a4 4 0 1 0 8 0" }, { r: "rise", a: 2 }],
    ["path", { d: "M4 3h1" }, { r: "twinkle", d: 0.1, o: [4.5, 3] }],
    ["path", { d: "M19 3h1" }, { r: "twinkle", d: 0.1, o: [19.5, 3] }],
    ["path", { d: "M12 9v1" }, { r: "twinkle", d: 0.15, o: [12, 9.5] }],
    ["path", { d: "M17.2 7.2l.707 .707" }, { r: "twinkle", d: 0.12, o: [17.5, 7.5] }],
    ["path", { d: "M6.8 7.2l-.7 .7" }, { r: "twinkle", d: 0.12, o: [6.5, 7.5] }],
    ["path", { d: "M4.28 21h15.44a1 1 0 0 0 .97 -1.243l-1.5 -6a1 1 0 0 0 -.97 -.757h-12.44a1 1 0 0 0 -.97 .757l-1.5 6a1 1 0 0 0 .97 1.243" }],
    ["path", { d: "M4 17h16" }],
    ["path", { d: "M10 13l-1 8" }],
    ["path", { d: "M14 13l1 8" }],
  ],
});
