import { createIcon } from "../runtime/createIcon.js";

// Solid from Tabler Icons "player-play" filled (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PlayOff = createIcon("PlayOff", "play-off", {
  nodes: [
    ["path", { d: "m10.215 4.56 9.79 5.71a2 2 0 0 1 .003 3.458l-.393.23" }, { r: "jelly", a: 0.06, o: [13.001, 12.78] }],
    ["path", { d: "m16.042 16.042-8.034 4.686A2 2 0 0 1 5 19V5" }, { r: "jelly", a: 0.06, o: [13.001, 12.78] }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.1, o: [12, 12] }],
  ],
  solid: [
    ["path", { d: "M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z", stroke: "none" }, { r: "jelly", a: 0.06, o: [13.001, 12.78] }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.1, o: [12, 12] }, "line"],
  ],
});
