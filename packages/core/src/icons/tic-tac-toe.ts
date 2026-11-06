import { icon } from "../icon.js";

export const TicTacToe = icon("TicTacToe", "tic-tac-toe", {
  nodes: [
    ["path", { d: "M12 2v20" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "m21 16-5 5" }, { r: "draw", d: 0.22, o: [18.5, 18.5] }],
    ["path", { d: "m21 21-5-5" }, { r: "draw", d: 0.28, o: [18.5, 18.5] }],
    ["path", { d: "M22 12H2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M8 3 3 8" }, { r: "draw", d: 0.05, o: [5.5, 5.5] }],
    ["path", { d: "M8 8 3 3" }, { r: "draw", d: 0.11, o: [5.5, 5.5] }],
    ["circle", { cx: "18.5", cy: "5.5", r: "2.5" }, { r: "pop", d: 0.15, o: [18.5, 5.5] }],
    ["circle", { cx: "5.5", cy: "18.5", r: "2.5" }, { r: "pop", d: 0.32, o: [5.5, 18.5] }],
  ],
});
