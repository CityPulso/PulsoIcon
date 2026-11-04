import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "keyhole" (MIT, Copyright (c) 2023 Phosphor Icons).
export const Keyhole = createIcon("Keyhole", "keyhole", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "turn", a: 12, o: [12, 12] }],
    ["path", { d: "M10.6 12.1a2.5 2.5 0 1 1 2.8 0L14.5 17h-5z" }, { r: "pop", d: 0.1, o: [12, 13] }],
  ],
});
