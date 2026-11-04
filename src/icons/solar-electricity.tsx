import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "solar-electricity" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SolarElectricity = createIcon("SolarElectricity", "solar-electricity", {
  nodes: [
    ["path", { d: "M4 6.28v11.44a1 1 0 0 0 1.243 .97l6 -1.5a1 1 0 0 0 .757 -.97v-8.44a1 1 0 0 0 -.757 -.97l-6 -1.5a1 1 0 0 0 -1.243 .97" }, { r: "tilt", a: 6, o: [8, 12] }],
    ["path", { d: "M8 6v12" }, { r: "tilt", a: 6, o: [8, 12] }],
    ["path", { d: "M12 12h-8" }, { r: "tilt", a: 6, o: [8, 12] }],
    ["path", { d: "M20 7l-3 5h4l-3 5" }, { r: "flicker", d: 0.15, o: [19, 12] }],
  ],
});
