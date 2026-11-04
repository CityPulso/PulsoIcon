import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "send-pounds" (MIT, Copyright (c) 2021 Luca Burgio).
export const SendPounds = createIcon("SendPounds", "send-pounds", {
  nodes: [
    ["path", { d: "M13 12H21M21 12L17.16 8M21 12L17.16 16" }, { r: "slide", x: 1, y: 0, a: 2, o: [17, 12] }],
    ["path", { d: "M7 13C6.33333 14.6667 5.33333 16.3333 4 17H10.3333C10.3333 17 11.3333 17 12 16.3333" }, { r: "press", o: [7.5, 12] }],
    ["path", { d: "M9.66667 13H3" }, { r: "press", o: [7.5, 12] }],
    ["path", { d: "M11 10C11 8.34315 9.65685 7 8 7C6.34315 7 5 8.34315 5 10C5 11.6569 6.34315 13 8 13" }, { r: "press", o: [7.5, 12] }],
  ],
});
