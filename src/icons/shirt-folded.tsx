import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "shirt-folded" (MIT, Copyright (c) 2023 Phosphor Icons).
export const ShirtFolded = createIcon("ShirtFolded", "shirt-folded", {
  nodes: [
    ["rect", { x: "4", y: "3", width: "16", height: "18", rx: "2" }, { r: "press", a: 0.05, o: [12, 21] }],
    ["path", { d: "M9 3 7.5 8 12 6l4.5 2L15 3" }, { r: "pop", d: 0.15, a: 0.15, o: [12, 5.5] }],
    ["path", { d: "M12 6v15" }, { r: "draw", d: 0.25, o: [12, 13.5] }],
  ],
});
