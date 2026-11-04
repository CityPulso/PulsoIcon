import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "asclepius" (MIT, Copyright (c) 2023 Phosphor Icons).
export const Asclepius = createIcon("Asclepius", "asclepius", {
  nodes: [
    ["path", { d: "M12 2v20" }, { r: "grow", o: [12, 22] }],
    ["path", { d: "M8 6h6a2 2 0 0 1 0 4h-4a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4h-2" }, { r: "draw", d: 0.1, o: [12, 12] }],
    ["path", { d: "M8 6a2 2 0 0 1-2-2 2 2 0 0 1 2 2" }, { r: "pop", d: 0.4, o: [7, 5] }],
  ],
});
