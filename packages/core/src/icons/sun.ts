import { icon } from "../icon.js";

export const Sun = icon("Sun", "sun", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "4" }, { r: "pulse", a: 0.1, o: [12, 12] }],
    ["path", { d: "M12 2v2" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M12 20v2" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "m4.93 4.93 1.41 1.41" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "m17.66 17.66 1.41 1.41" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M2 12h2" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M20 12h2" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "m6.34 17.66-1.41 1.41" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "m19.07 4.93-1.41 1.41" }, { r: "spin", a: 90, o: [12, 12] }],
  ],
});
