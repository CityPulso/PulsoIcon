import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "boules" (MIT, Copyright (c) 2023 Phosphor Icons).

export const Boules = createIcon("Boules", "boules", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "roll", x: 1, a: 1, o: [12, 12] }],
    ["path", { d: "M3.75 15.3 15.3 3.75" }, { r: "roll", x: 1, a: 1, o: [12, 12] }],
    ["path", { d: "M5.78 18.22 18.22 5.78" }, { r: "roll", x: 1, a: 1, o: [12, 12] }],
    ["path", { d: "M8.7 20.25 20.25 8.7" }, { r: "roll", x: 1, a: 1, o: [12, 12] }],
  ],
});
