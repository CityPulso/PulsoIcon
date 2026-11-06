import { icon } from "../icon.js";

export const ExchangeDollar = icon("ExchangeDollar", "exchange-dollar", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 0 1 15-6.7L21 8" }, { r: "spin", a: 180, o: [12, 12] }],
    ["path", { d: "M21 3v5h-5" }, { r: "spin", a: 180, o: [12, 12] }],
    ["path", { d: "M21 12a9 9 0 0 1-15 6.7L3 16" }, { r: "spin", a: 180, o: [12, 12] }],
    ["path", { d: "M3 21v-5h5" }, { r: "spin", a: 180, o: [12, 12] }],
    ["path", { d: "M12 8v8" }, { r: "grow", d: 0.2, o: [12, 12] }],
    ["path", { d: "M14 9.5h-3a1.25 1.25 0 0 0 0 2.5h2a1.25 1.25 0 0 1 0 2.5h-3" }, { r: "redraw", d: 0.2, o: [12, 12] }],
  ],
});
