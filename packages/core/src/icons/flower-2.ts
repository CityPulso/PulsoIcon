import { icon } from "../icon.js";

export const Flower2 = icon("Flower2", "flower-2", {
  nodes: [
    ["path", { d: "M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1" }, { r: "spin", a: 90, o: [12, 8] }],
    ["circle", { cx: "12", cy: "8", r: "2" }, { r: "spin", a: 90, o: [12, 8] }],
    ["path", { d: "M12 10v12" }, { r: "sway", a: 6, o: [12, 22] }],
    ["path", { d: "M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z" }, { r: "sway", a: 6, o: [12, 22] }],
    ["path", { d: "M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z" }, { r: "sway", a: 6, o: [12, 22] }],
  ],
});
