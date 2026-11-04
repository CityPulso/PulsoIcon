import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "hurricane" (MIT, Copyright (c) 2023 Phosphor Icons).
export const Hurricane = createIcon("Hurricane", "hurricane", {
  nodes: [
    ["path", { d: "M18.5 3c-1.5 2-4 3.5-6.5 3.5a5.5 5.5 0 0 0 0 11" }, { r: "spin", a: -360, o: [12, 12] }],
    ["path", { d: "M5.5 21c1.5-2 4-3.5 6.5-3.5a5.5 5.5 0 0 0 0-11" }, { r: "spin", a: -360, o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "2" }, { r: "pop", d: 0.2, o: [12, 12] }],
  ],
});
