import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "record" (MIT, Copyright (c) 2023 Phosphor Icons).
export const Record = createIcon("Record", "record", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.06, o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "5" }, { r: "pulse", d: 0.1, a: 0.2, o: [12, 12] }],
  ],
});
