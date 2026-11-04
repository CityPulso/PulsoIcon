import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "text-t-slash" (MIT, Copyright (c) 2023 Phosphor Icons).
export const TextTOff = createIcon("TextTOff", "text-t-off", {
  nodes: [
    ["path", { d: "M7 4h12a1 1 0 0 1 1 1v2" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M12 4v5" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M12 15v5" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M9 20h6" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.1, o: [12, 12] }],
  ],
});
