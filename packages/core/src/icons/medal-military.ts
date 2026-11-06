import { icon } from "../icon.js";

// Drawn after Phosphor Icons "medal-military" (MIT, Copyright (c) 2023 Phosphor Icons).

export const MedalMilitary = icon("MedalMilitary", "medal-military", {
  nodes: [
    ["path", { d: "M6 3h12v6l-6 4-6-4z" }, { r: "press", a: 0.05, o: [12, 3] }],
    ["path", { d: "M10 3v6" }, { r: "press", a: 0.05, o: [12, 3] }],
    ["path", { d: "M14 3v6" }, { r: "press", a: 0.05, o: [12, 3] }],
    ["circle", { cx: "12", cy: "17.5", r: "3.5" }, { r: "swing", d: 0.05, a: 14, o: [12, 13] }],
  ],
});
