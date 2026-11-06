import { icon } from "../icon.js";

// Drawn after Phosphor Icons "face-sticker" (MIT, Copyright (c) 2023 Phosphor Icons).

export const FaceSticker = icon("FaceSticker", "face-sticker", {
  nodes: [
    ["path", { d: "M21.95 13A10 10 0 1 0 13 21.95" }, { r: "wobble", a: 4, o: [12, 12] }],
    ["path", { d: "M13 21.95 21.95 13c-4.9 0-8.95 4.05-8.95 8.95" }, { r: "fold", d: 0.1, o: [17.5, 17.5] }],
    ["path", { d: "M9 9h.01" }, { r: "blink", d: 0.15, o: [9, 9] }],
    ["path", { d: "M15 9h.01" }, { r: "blink", d: 0.15, o: [15, 9] }],
    ["path", { d: "M8 13.5a4.5 4.5 0 0 0 5.5 2" }, { r: "draw", d: 0.2, o: [10.5, 15] }],
  ],
});
