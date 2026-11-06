import { icon } from "../icon.js";

// Drawn after Phosphor Icons "face-x-eyes" (MIT, Copyright (c) 2023 Phosphor Icons).

export const FaceXEyes = icon("FaceXEyes", "face-x-eyes", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "m8 8 2 2m0-2-2 2" }, { r: "spin", a: 180, o: [9, 9] }],
    ["path", { d: "m14 8 2 2m0-2-2 2" }, { r: "spin", a: 180, o: [15, 9] }],
    ["circle", { cx: "12", cy: "15.5", r: "1.5" }, { r: "pulse", d: 0.2, o: [12, 15.5] }],
  ],
});
