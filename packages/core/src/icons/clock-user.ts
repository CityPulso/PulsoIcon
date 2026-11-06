import { icon } from "../icon.js";

// Drawn after Phosphor Icons "clock-user" (MIT, Copyright (c) 2023 Phosphor Icons).
export const ClockUser = icon("ClockUser", "clock-user", {
  nodes: [
    ["path", { d: "M21.96 11.13A10 10 0 1 0 11.13 21.96" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M12 6v6l2.5 1.5" }, { r: "spin", a: 360, o: [12, 12] }],
    ["circle", { cx: "18", cy: "15", r: "2" }, { r: "bounce", d: 0.15, y: -1, a: 1.5, o: [18, 15] }],
    ["path", { d: "M14.5 22a3.5 3 0 0 1 7 0" }, { r: "draw", d: 0.2, o: [18, 20.5] }],
  ],
});
