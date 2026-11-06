import { icon } from "../icon.js";

export const GhostSmile = icon("GhostSmile", "ghost-smile", {
  nodes: [
    [
      "path",
      {
        d: "M7.528 20.472a1.6 1.6 0 012.277 0l1.057 1.056a1.6 1.6 0 002.276 0l1.057-1.056a1.6 1.6 0 012.277 0l1.114 1.114a1.4 1.4 0 002.414-1V10a8 8 0 00-16 0v10.586a1.4 1.4 0 002.414 1z",
      },
      { r: "float", a: 2, o: [12, 12] },
    ],
    ["path", { d: "M9 9v1" }, { r: "blink", d: 0.2, o: [12, 9.5] }],
    ["path", { d: "M15 9v1" }, { r: "blink", d: 0.2, o: [12, 9.5] }],
    ["path", { d: "M9.5 13.5a3.5 3.5 0 0 0 5 0" }, { r: "draw", d: 0.15, o: [12, 14] }],
  ],
});
