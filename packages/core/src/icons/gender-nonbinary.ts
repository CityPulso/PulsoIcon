import { icon } from "../icon.js";

// Drawn after Phosphor Icons "gender-nonbinary" (MIT, Copyright (c) 2023 Phosphor Icons).
export const GenderNonbinary = icon("GenderNonbinary", "gender-nonbinary", {
  nodes: [
    ["circle", { cx: "12", cy: "16", r: "5" }, { r: "pulse", o: [12, 16] }],
    ["path", { d: "M12 11V5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M9 2.5l6 5M15 2.5l-6 5" }, { r: "twinkle", d: 0.25, o: [12, 5] }],
  ],
});
