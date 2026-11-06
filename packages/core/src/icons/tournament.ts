import { icon } from "../icon.js";

export const Tournament = icon("Tournament", "tournament", {
  nodes: [
    ["path", { d: "M2 4h5v6H2" }, { r: "draw", o: [4.5, 7] }],
    ["path", { d: "M2 14h5v6H2" }, { r: "draw", o: [4.5, 17] }],
    ["path", { d: "M7 7h5v10H7" }, { r: "draw", d: 0.2, o: [9.5, 12] }],
    ["path", { d: "M12 12h5" }, { r: "draw", d: 0.35, o: [14.5, 12] }],
    ["circle", { cx: "19", cy: "12", r: "2" }, { r: "pop", d: 0.45, o: [19, 12] }],
  ],
});
