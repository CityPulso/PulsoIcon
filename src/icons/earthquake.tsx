import { createIcon } from "../runtime/createIcon.js";

export const Earthquake = createIcon("Earthquake", "earthquake", {
  nodes: [
    ["path", { d: "M6 17v-6.5l6-5 6 5V17" }, { r: "shake", a: 1, o: [12, 17] }],
    ["path", { d: "M2 17h20" }],
    ["path", { d: "M12 17l-1.5 1.5 2 1.5-1 1.5" }, { r: "draw", d: 0.15, o: [12, 19] }],
    ["path", { d: "M2.5 8.5v4" }, { r: "fade", d: 0.1, o: [2.5, 10.5] }],
    ["path", { d: "M21.5 8.5v4" }, { r: "fade", d: 0.1, o: [21.5, 10.5] }],
  ],
});
