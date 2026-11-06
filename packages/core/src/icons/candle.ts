import { icon } from "../icon.js";

export const Candle = icon("Candle", "candle", {
  nodes: [
    ["path", { d: "M8 10h8v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2z" }, { r: "fade", o: [12, 16] }],
    ["path", { d: "M12 10V8" }, { r: "fade", o: [12, 9] }],
    ["path", { d: "M12 2c1.5 1.5 2 2.5 2 3.5a2 2 0 0 1-4 0c0-1 .5-2 2-3.5z" }, { r: "sway", a: 10, o: [12, 7.5] }],
  ],
});
