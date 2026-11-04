import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "lamp-pendant" (MIT, Copyright (c) 2023 Phosphor Icons).
export const LampPendant = createIcon("LampPendant", "lamp-pendant", {
  nodes: [
    ["path", { d: "M12 2v5" }, { r: "fade", o: [12, 4.5] }],
    ["path", { d: "M4 15a8 8 0 0 1 16 0" }, { r: "swing", a: 8, o: [12, 2] }],
    ["path", { d: "M3 15h18" }, { r: "swing", a: 8, o: [12, 2] }],
    ["path", { d: "M9 15a3 3 0 0 0 6 0" }, { r: "swing", a: 8, o: [12, 2] }],
  ],
});
