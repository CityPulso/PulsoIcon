import { icon } from "../icon.js";

// Drawn after Phosphor Icons "person-arms-spread" (MIT, Copyright (c) 2023 Phosphor Icons).

export const PersonArmsSpread = icon("PersonArmsSpread", "person-arms-spread", {
  nodes: [
    ["circle", { cx: "12", cy: "4", r: "2" }, { r: "bounce", y: -1, a: 1.5, o: [12, 12] }],
    ["path", { d: "M3 8.5 12 11l9-2.5" }, { r: "swing", d: 0.05, a: 8, o: [12, 11] }],
    ["path", { d: "M12 11v4" }, { r: "bounce", y: -1, a: 1.5, o: [12, 12] }],
    ["path", { d: "m7 21 5-6 5 6" }, { r: "jelly", d: 0.1, o: [12, 21] }],
  ],
});
