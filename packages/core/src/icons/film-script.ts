import { icon } from "../icon.js";

// Drawn after Phosphor Icons "film-script" (MIT, Copyright (c) 2023 Phosphor Icons).
export const FilmScript = icon("FilmScript", "film-script", {
  nodes: [
    ["rect", { x: "5", y: "2", width: "14", height: "20", rx: "2" }, { r: "fold", o: [12, 12] }],
    ["path", { d: "M9 7h.01" }, { r: "pop", d: 0.1, o: [9, 7] }],
    ["path", { d: "M9 12h.01" }, { r: "pop", d: 0.2, o: [9, 12] }],
    ["path", { d: "M9 17h.01" }, { r: "pop", d: 0.3, o: [9, 17] }],
  ],
});
