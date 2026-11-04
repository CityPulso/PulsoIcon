import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "file-text-spark" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FileTextSpark = createIcon("FileTextSpark", "file-text-spark", {
  nodes: [
    ["path", { d: "M14 3v4a1 1 0 0 0 1 1h4" }],
    ["path", { d: "M12 21h-5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v3.5" }],
    ["path", { d: "M9 9h1" }, { r: "growX", d: 0.05, o: [9, 9] }],
    ["path", { d: "M9 13h6" }, { r: "growX", d: 0.13, o: [9, 13] }],
    ["path", { d: "M9 17h3" }, { r: "growX", d: 0.21, o: [9, 17] }],
    ["path", { d: "M19 22.5a4.75 4.75 0 0 1 3.5 -3.5a4.75 4.75 0 0 1 -3.5 -3.5a4.75 4.75 0 0 1 -3.5 3.5a4.75 4.75 0 0 1 3.5 3.5" }, { r: "twinkle", d: 0.3, o: [19, 19] }],
  ],
});
