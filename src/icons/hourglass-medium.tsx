import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "hourglass-medium" (MIT, Copyright (c) 2023 Phosphor Icons).
export const HourglassMedium = createIcon("HourglassMedium", "hourglass-medium", {
  nodes: [
    ["path", { d: "M5 22h14" }],
    ["path", { d: "M5 2h14" }],
    ["path", { d: "M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" }],
    ["path", { d: "M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" }],
    ["path", { d: "M8.5 8.5h7" }, { r: "slide", y: 1, a: 1.5, o: [12, 8.5] }],
    ["path", { d: "M8 18.5h8" }, { r: "slide", y: -1, a: 1, o: [12, 18.5] }],
  ],
});
