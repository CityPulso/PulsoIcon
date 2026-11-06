import { icon } from "../icon.js";

// Adapted from Tabler Icons "copyright-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CopyrightOff = icon("CopyrightOff", "copyright-off", {
  nodes: [
    ["path", { d: "M14 9.75a3.016 3.016 0 0 0 -.711 -.466m-3.41 .596a2.993 2.993 0 0 0 -.042 4.197a3.016 3.016 0 0 0 4.163 .173" }, { r: "pop", o: [12, 12] }],
    ["path", { d: "M20.042 16.045a9 9 0 0 0 -12.087 -12.087m-2.318 1.677a9 9 0 1 0 12.725 12.73" }, { r: "turn", a: 30, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
  solid: [
    ["path", { d: "M15 9.354a4 4 0 1 0 0 5.292" }, { r: "pop", o: [12, 12] }, "line"],
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "turn", a: 30, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
