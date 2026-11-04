import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "prohibit-inset" (MIT, Copyright (c) 2023 Phosphor Icons).

export const ProhibitInset = createIcon("ProhibitInset", "prohibit-inset", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.06, o: [12, 12] }],
    ["path", { d: "m8.5 8.5 7 7" }, { r: "draw", d: 0.1, o: [12, 12] }],
  ],
});
