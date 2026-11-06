import { icon } from "../icon.js";

export const ChartCandlestick = icon("ChartCandlestick", "chart-candlestick", {
  nodes: [
    ["path", { d: "M9 5v4" }, { r: "float", a: 2, o: [9, 11] }],
    ["rect", { width: "4", height: "6", x: "7", y: "9", rx: "1" }, { r: "float", a: 2, o: [9, 11] }],
    ["path", { d: "M9 15v2" }, { r: "float", a: 2, o: [9, 11] }],
    ["path", { d: "M17 3v2" }, { r: "float", d: 0.1, a: -2, o: [17, 9.5] }],
    ["rect", { width: "4", height: "8", x: "15", y: "5", rx: "1" }, { r: "float", d: 0.1, a: -2, o: [17, 9.5] }],
    ["path", { d: "M17 13v3" }, { r: "float", d: 0.1, a: -2, o: [17, 9.5] }],
    ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }, { r: "fade", o: [12, 12] }],
  ],
});
