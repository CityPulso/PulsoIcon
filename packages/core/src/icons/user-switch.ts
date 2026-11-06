import { icon } from "../icon.js";

// Drawn after Phosphor Icons "user-switch" (MIT, Copyright (c) 2023 Phosphor Icons).

export const UserSwitch = icon("UserSwitch", "user-switch", {
  nodes: [
    ["path", { d: "M4.5 12a7.5 7.5 0 0 1 15 0" }, { r: "spin", a: 180, o: [12, 12] }],
    ["path", { d: "m17 10.5 2.5 2.5 2.5-2.5" }, { r: "spin", a: 180, o: [12, 12] }],
    ["path", { d: "M19.5 12a7.5 7.5 0 0 1-15 0" }, { r: "spin", a: 180, o: [12, 12] }],
    ["path", { d: "m7 13.5-2.5-2.5-2.5 2.5" }, { r: "spin", a: 180, o: [12, 12] }],
    ["circle", { cx: "12", cy: "10", r: "2.5" }, { r: "pop", d: 0.2, o: [12, 12] }],
    ["path", { d: "M7.5 18a5 5 0 0 1 9 0" }, { r: "pop", d: 0.2, o: [12, 12] }],
  ],
});
