import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "office-chair" (MIT, Copyright (c) 2023 Phosphor Icons).
export const OfficeChair = createIcon("OfficeChair", "office-chair", {
  nodes: [
    ["path", { d: "M9 3h6a1 1 0 0 1 1 1.1L15.2 11H8.8L8 4.1A1 1 0 0 1 9 3z" }, { r: "turn", a: 10, o: [12, 14] }],
    ["path", { d: "M4 9v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9" }, { r: "turn", a: 10, o: [12, 14] }],
    ["path", { d: "M12 12v5" }, { r: "press", a: 0.08, o: [12, 21] }],
    ["path", { d: "M7 21v-1a5 3 0 0 1 10 0v1" }, { r: "press", a: 0.08, o: [12, 21] }],
  ],
});
