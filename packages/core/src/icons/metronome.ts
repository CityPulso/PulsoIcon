import { icon } from "../icon.js";

export const Metronome = icon("Metronome", "metronome", {
  nodes: [
    ["path", { d: "M12 11.4V9.1" }, { r: "ring", a: 20, o: [12, 17] }],
    ["path", { d: "m12 17 6.59-6.59" }, { r: "ring", a: 20, o: [12, 17] }],
    ["path", { d: "m15.05 5.7-.218-.691a3 3 0 0 0-5.663 0L4.418 19.695A1 1 0 0 0 5.37 21h13.253a1 1 0 0 0 .951-1.31L18.45 16.2" }, { r: "press", a: 0.03, o: [11.997, 12] }],
    ["circle", { cx: "20", cy: "9", r: "2" }, { r: "ring", a: 20, o: [12, 17] }],
  ],
});
