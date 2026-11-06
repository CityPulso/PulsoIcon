import { icon } from "../icon.js";

export const ExchangeChart = icon("ExchangeChart", "exchange-chart", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 0 1 15-6.7L21 8" }, { r: "spin", a: 180, o: [12, 12] }],
    ["path", { d: "M21 3v5h-5" }, { r: "spin", a: 180, o: [12, 12] }],
    ["path", { d: "M21 12a9 9 0 0 1-15 6.7L3 16" }, { r: "spin", a: 180, o: [12, 12] }],
    ["path", { d: "M3 21v-5h5" }, { r: "spin", a: 180, o: [12, 12] }],
    ["path", { d: "m8 14 2.5-2.5 2 2L16 10" }, { r: "draw", d: 0.2 }],
  ],
});
