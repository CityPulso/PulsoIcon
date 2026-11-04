import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "face-melting" (MIT, Copyright (c) 2023 Phosphor Icons).

export const FaceMelting = createIcon("FaceMelting", "face-melting", {
  nodes: [
    ["path", { d: "M6 20A10 10 0 1 1 20 18" }, { r: "sway", a: 4, o: [12, 12] }],
    ["path", { d: "M11.5 7h.01" }, { r: "blink", d: 0.1, o: [11.5, 7] }],
    ["path", { d: "M16.5 12h.01" }, { r: "blink", d: 0.1, o: [16.5, 12] }],
    ["path", { d: "M7.5 9.5c0 3.5 2.5 6 5.5 6.5c1.5.3 1.5 2.5 0 2.5h-2c-1.5 0-1.5 3 0 3H15" }, { r: "draw", d: 0.1, o: [12, 15] }],
  ],
});
