import { icon } from "../icon.js";

export const ThermometerSun = icon("ThermometerSun", "thermometer-sun", {
  nodes: [
    ["path", { d: "M12 2v2" }, { r: "spin", d: 0.1, a: 45, o: [8, 12] }],
    ["path", { d: "M12 8a4 4 0 0 0-1.645 7.647" }, { r: "rise", d: 0.05, a: 1.5, o: [9.999, 11.823] }],
    ["path", { d: "M2 12h2" }, { r: "spin", d: 0.1, a: 45, o: [8, 12] }],
    ["path", { d: "M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z" }, { r: "pulse", a: 0.05, o: [18, 18] }],
    ["path", { d: "m4.93 4.93 1.41 1.41" }, { r: "spin", d: 0.1, a: 45, o: [8, 12] }],
    ["path", { d: "m6.34 17.66-1.41 1.41" }, { r: "spin", d: 0.1, a: 45, o: [8, 12] }],
  ],
});
