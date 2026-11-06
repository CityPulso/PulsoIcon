import { icon } from "../icon.js";

// Adapted from Tabler Icons "test-pipe-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TestPipeOff = icon("TestPipeOff", "test-pipe-off", {
  nodes: [
    [
      "path",
      {
        d: "M20 8.04a803.533 803.533 0 0 0 -4 3.96m-2 2c-1.085 1.085 -3.125 3.14 -6.122 6.164a2.857 2.857 0 0 1 -4.041 -4.04c3.018 -3 5.073 -5.037 6.163 -6.124m2 -2c.872 -.872 2.191 -2.205 3.959 -4",
      },
      { r: "sway", a: 8, o: [18, 6] },
    ],
    ["path", { d: "M7 13h6" }, { r: "sway", a: 8, o: [18, 6] }],
    ["path", { d: "M19 15l1.5 1.6m-.74 3.173a2 2 0 0 1 -2.612 -2.608" }, { r: "sway", a: 8, o: [18, 6] }],
    ["path", { d: "M15 3l6 6" }, { r: "sway", a: 8, o: [18, 6] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
  solid: [
    ["path", { d: "M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3" }, { r: "sway", a: 8, o: [18, 6] }],
    ["path", { d: "m16 2 6 6", fill: "none" }, { r: "sway", a: 8, o: [18, 6] }],
    ["path", { d: "M12 16H4" }, { r: "sway", a: 8, o: [18, 6] }, "line"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
