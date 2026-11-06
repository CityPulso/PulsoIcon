import { icon } from "../icon.js";

// Drawn after Phosphor Icons "hand-eye" (MIT, Copyright (c) 2023 Phosphor Icons).
export const HandEye = icon("HandEye", "hand-eye", {
  nodes: [
    ["path", { d: "M5 14V9a1.75 1.75 0 0 1 3.5 0V6a1.75 1.75 0 0 1 3.5 0 1.75 1.75 0 0 1 3.5 0v3a1.75 1.75 0 0 1 3.5 0v5a7 7 0 0 1-14 0Z" }, { r: "press", a: 0.04, o: [12, 14] }],
    ["path", { d: "M8.5 15s1.5-2.5 3.5-2.5 3.5 2.5 3.5 2.5-1.5 2.5-3.5 2.5-3.5-2.5-3.5-2.5" }, { r: "blink", d: 0.1, o: [12, 15] }],
    ["path", { d: "M12 15h.01" }, { r: "blink", d: 0.1, o: [12, 15] }],
  ],
});
