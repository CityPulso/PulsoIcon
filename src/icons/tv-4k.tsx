import { createIcon } from "../runtime/createIcon.js";

export const Tv4k = createIcon("Tv4k", "tv-4k", {
  text: true,
  nodes: [
    ["path", { d: "m17 2-5 5-5-5" }, { r: "swing", d: 0.05, a: 10, o: [12, 7] }],
    ["rect", { width: "20", height: "15", x: "2", y: "7", rx: "2" }, { r: "press", a: 0.04, o: [12, 14.5] }],
    ["path", { d: "M10 17.5V11.5L6.5 15.5h4.5" }, { r: "draw", d: 0.15, o: [8.75, 14.5] }],
    ["path", { d: "M14 11.5v6" }, { r: "draw", d: 0.23, o: [15.75, 14.5] }],
    ["path", { d: "M17.5 11.5L14 14.5l3.5 3" }, { r: "draw", d: 0.23, o: [15.75, 14.5] }],
  ],
});
