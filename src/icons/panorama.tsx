import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "panorama" (MIT, Copyright (c) 2023 Phosphor Icons).
export const Panorama = createIcon("Panorama", "panorama", {
  nodes: [
    ["path", { d: "M3 5c6 2 12 2 18 0v14c-6-2-12-2-18 0z" }, { r: "jelly", a: 0.04, o: [12, 12] }],
    ["path", { d: "m3 15 5-5 6.5 6.5" }, { r: "draw", d: 0.1, o: [8.75, 13.25] }],
    ["path", { d: "m12 14 3.5-3.5L21 16" }, { r: "draw", d: 0.2, o: [16.5, 13.25] }],
    ["path", { d: "M16.5 8.5h.01" }, { r: "rise", d: 0.3, a: 2, o: [16.5, 8.5] }],
  ],
});
