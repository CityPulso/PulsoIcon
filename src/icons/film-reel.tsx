import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "film-reel" (MIT, Copyright (c) 2023 Phosphor Icons).
export const FilmReel = createIcon("FilmReel", "film-reel", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "9" }, { r: "spin", a: 90, o: [12, 12] }],
    ["circle", { cx: "12", cy: "7.5", r: "1.5" }, { r: "spin", a: 90, o: [12, 12] }],
    ["circle", { cx: "12", cy: "16.5", r: "1.5" }, { r: "spin", a: 90, o: [12, 12] }],
    ["circle", { cx: "7.5", cy: "12", r: "1.5" }, { r: "spin", a: 90, o: [12, 12] }],
    ["circle", { cx: "16.5", cy: "12", r: "1.5" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M12 21h9" }, { r: "draw", d: 0.1 }],
  ],
});
