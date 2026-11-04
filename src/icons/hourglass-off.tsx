import { createIcon } from "../runtime/createIcon.js";

export const HourglassOff = createIcon("HourglassOff", "hourglass-off", {
  nodes: [
    ["path", { d: "M6 2h13" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M17 2v4.172a2 2 0 0 1-.586 1.414L14 10" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M10 14l-2.414 2.414A2 2 0 0 0 7 17.828V22" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M5 22h13" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.1, o: [12, 12] }],
  ],
});
