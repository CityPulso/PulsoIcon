import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "letter-case-toggle" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const LetterCaseToggle = createIcon("LetterCaseToggle", "letter-case-toggle", {
  nodes: [
    ["path", { d: "M3 15.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0" }, { r: "pop", o: [8, 15.5] }],
    ["path", { d: "M14 19v-10.5a3.5 3.5 0 0 1 7 0v10.5" }, { r: "pop", d: 0.2, o: [17.5, 13.5] }],
    ["path", { d: "M14 13h7" }, { r: "pop", d: 0.2, o: [17.5, 13.5] }],
    ["path", { d: "M10 12v7" }, { r: "pop", o: [8, 15.5] }],
  ],
});
