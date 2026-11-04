import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "gradient" (MIT, Copyright (c) 2023 Phosphor Icons).
export const Gradient = createIcon("Gradient", "gradient", {
  nodes: [
    ["path", { d: "M3 6h18" }, { r: "growX", o: [3, 6] }],
    ["path", { d: "M3 10h7M14 10h7" }, { r: "growX", d: 0.08, o: [3, 10] }],
    ["path", { d: "M3 14h3M10 14h4M18 14h3" }, { r: "growX", d: 0.16, o: [3, 14] }],
    ["path", { d: "M3 18h.01M7.5 18h.01M12 18h.01M16.5 18h.01M21 18h.01" }, { r: "fade", d: 0.24, o: [12, 18] }],
  ],
});
