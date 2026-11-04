import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "money-wavy" (MIT, Copyright (c) 2023 Phosphor Icons).

export const MoneyWavy = createIcon("MoneyWavy", "money-wavy", {
  nodes: [
    ["path", { d: "M2 7c3-1.5 6-1 10 0s7 1.5 10 0v10c-3 1.5-6 1-10 0s-7-1.5-10 0z" }, { r: "sway", a: 4, o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "2" }, { r: "spin", d: 0.1, a: -360, o: [12, 12] }],
    ["path", { d: "M6 10.5v3" }, { r: "fade", d: 0.2, o: [12, 12] }],
    ["path", { d: "M18 10.5v3" }, { r: "fade", d: 0.2, o: [12, 12] }],
  ],
});
