import { icon } from "../icon.js";

// Adapted from Tabler Icons "contrast-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ContrastOff = icon("ContrastOff", "contrast-off", {
  nodes: [
    ["path", { d: "M12 12v5a4.984 4.984 0 0 0 3.522 -1.45m1.392 -2.623a5 5 0 0 0 -4.914 -5.927v1" }, { r: "pop", a: 0.1, o: [12, 12] }],
    ["path", { d: "M5.641 5.631a9 9 0 1 0 12.719 12.738m1.68 -2.318a9 9 0 0 0 -12.074 -12.098" }, { r: "turn", a: 20, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
  solid: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "turn", a: 20, o: [12, 12] }],
    ["path", { d: "M12 18a6 6 0 0 0 0-12v12z" }, { r: "pop", a: 0.1, o: [12, 12] }, "cut"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
