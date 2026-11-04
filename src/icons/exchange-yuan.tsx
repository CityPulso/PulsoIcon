import { createIcon } from "../runtime/createIcon.js";

export const ExchangeYuan = createIcon("ExchangeYuan", "exchange-yuan", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 0 1 15-6.7L21 8" }, { r: "spin", a: 180, o: [12, 12] }],
    ["path", { d: "M21 3v5h-5" }, { r: "spin", a: 180, o: [12, 12] }],
    ["path", { d: "M21 12a9 9 0 0 1-15 6.7L3 16" }, { r: "spin", a: 180, o: [12, 12] }],
    ["path", { d: "M3 21v-5h5" }, { r: "spin", a: 180, o: [12, 12] }],
    ["path", { d: "m10 8.5 2 3 2-3" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M12 11.5v4" }, { r: "draw", d: 0.3 }],
    ["path", { d: "M10 13h4" }, { r: "draw", d: 0.35 }],
  ],
});
