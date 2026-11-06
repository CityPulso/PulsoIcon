import { icon } from "../icon.js";

export const Yoga = icon("Yoga", "yoga", {
  nodes: [
    ["circle", { cx: "12", cy: "4", r: "1" }, { r: "float", a: 1.5, o: [12, 4] }],
    ["path", { d: "M12 8v6" }, { r: "pulse", a: 0.05, o: [12, 14] }],
    ["path", { d: "M5 14l3-5h8l3 5" }, { r: "float", d: 0.1, a: 1, o: [12, 11] }],
    ["path", { d: "M3 19c3 0 5-2 9-5 4 3 6 5 9 5" }, { r: "pulse", a: 0.05, o: [12, 14] }],
    ["path", { d: "M7 20h10" }, { r: "pulse", a: 0.05, o: [12, 14] }],
  ],
});
