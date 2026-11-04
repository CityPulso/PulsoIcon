import { createIcon } from "../runtime/createIcon.js";

export const BrickWallFire = createIcon("BrickWallFire", "brick-wall-fire", {
  nodes: [
    ["path", { d: "M16 3v2.107" }, { r: "flicker", o: [16, 4.053] }],
    ["path", { d: "M17 9c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 22 17a5 5 0 0 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C13 11.5 16 9 17 9" }, { r: "sway", a: 8, o: [17, 22] }],
    ["path", { d: "M21 8.274V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.938" }, { r: "press", a: 0.03, o: [12, 21] }],
    ["path", { d: "M3 15h5.253" }, { r: "press", a: 0.03, o: [12, 21] }],
    ["path", { d: "M3 9h8.228" }, { r: "press", a: 0.03, o: [12, 21] }],
    ["path", { d: "M8 15v6" }, { r: "press", a: 0.03, o: [12, 21] }],
    ["path", { d: "M8 3v6" }, { r: "press", a: 0.03, o: [12, 21] }],
  ],
});
