import { icon } from "../icon.js";

// Drawn after Phosphor Icons "boat" (MIT, Copyright (c) 2023 Phosphor Icons).

export const Boat = icon("Boat", "boat", {
  svg: { r: "sway", a: 6, o: [12, 22] },
  nodes: [
    ["path", { d: "M12 2v4" }, { r: "swing", d: 0.1, a: 8, o: [12, 6] }],
    ["path", { d: "M7 10V7a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3" }],
    ["path", { d: "M4 10h16v3c0 4-3.5 7.5-8 9-4.5-1.5-8-5-8-9z" }],
    ["path", { d: "M12 10v12" }],
  ],
});
