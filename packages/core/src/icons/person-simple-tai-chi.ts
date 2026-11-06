import { icon } from "../icon.js";

// Drawn after Phosphor Icons "person-simple-tai-chi" (MIT, Copyright (c) 2023 Phosphor Icons).

export const PersonSimpleTaiChi = icon("PersonSimpleTaiChi", "person-simple-tai-chi", {
  nodes: [
    ["circle", { cx: "12", cy: "4", r: "2" }, { r: "sway", a: 4, o: [12, 13] }],
    ["path", { d: "M3 9h18" }, { r: "turn", d: 0.05, a: 8, o: [12, 9] }],
    ["path", { d: "M12 9v4l-6 8" }, { r: "sway", a: 4, o: [12, 13] }],
    ["path", { d: "m12 13 5 3v5" }, { r: "sway", a: 4, o: [12, 13] }],
  ],
});
