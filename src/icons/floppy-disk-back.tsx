import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "floppy-disk-back" (MIT, Copyright (c) 2023 Phosphor Icons).
export const FloppyDiskBack = createIcon("FloppyDiskBack", "floppy-disk-back", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }],
    ["path", { d: "M8 3v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3" }, { r: "slide", x: 1, a: 1.5 }],
    ["circle", { cx: "12", cy: "14", r: "3" }, { r: "pop", d: 0.1, o: [12, 14] }],
  ],
});
