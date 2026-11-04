import { createIcon } from "../runtime/createIcon.js";

export const Tv = createIcon("Tv", "tv", {
  nodes: [
    ["path", { d: "m17 2-5 5-5-5" }, { r: "swing", d: 0.05, a: 10, o: [12, 7] }],
    ["rect", { width: "20", height: "15", x: "2", y: "7", rx: "2" }, { r: "press", a: 0.04, o: [12, 14.5] }],
  ],
});
