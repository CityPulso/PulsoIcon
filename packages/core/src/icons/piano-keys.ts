import { icon } from "../icon.js";

// Drawn after Phosphor Icons "piano-keys" (MIT, Copyright (c) 2023 Phosphor Icons).

export const PianoKeys = icon("PianoKeys", "piano-keys", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.03, o: [12, 21] }],
    ["path", { d: "M7.5 3v8.5h3V3" }, { r: "press", a: 0.15, o: [9, 3] }],
    ["path", { d: "M13.5 3v8.5h3V3" }, { r: "press", d: 0.2, a: 0.15, o: [15, 3] }],
    ["path", { d: "M9 11.5V21" }, { r: "press", a: 0.15, o: [9, 3] }],
    ["path", { d: "M15 11.5V21" }, { r: "press", d: 0.2, a: 0.15, o: [15, 3] }],
  ],
});
