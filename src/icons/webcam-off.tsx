import { createIcon } from "../runtime/createIcon.js";

export const WebcamOff = createIcon("WebcamOff", "webcam-off", {
  nodes: [
    ["path", { d: "M12 22v-4" }, { r: "fade", o: [11.998, 12] }],
    ["path", { d: "M12.754 7.096a3 3 0 0 1 2.15 2.15" }, { r: "fade", o: [11.998, 12] }],
    ["path", { d: "M12.863 12.873a3 3 0 0 1-3.736-3.735" }, { r: "fade", o: [11.998, 12] }],
    ["path", { d: "M16.566 16.57A8 8 0 0 1 5.43 5.433" }, { r: "fade", o: [11.998, 12] }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.1, o: [12, 12] }],
    ["path", { d: "M7 22h10" }, { r: "fade", o: [11.998, 12] }],
    ["path", { d: "M8.478 2.817a8 8 0 0 1 10.705 10.705" }, { r: "fade", o: [11.998, 12] }],
  ],
  solid: [
    ["circle", { cx: "12", cy: "10", r: "8" }, { r: "fade", o: [11.998, 12] }],
    ["circle", { cx: "12", cy: "10", r: "3" }, { r: "fade", o: [11.998, 12] }, "cut"],
    ["path", { d: "M7 22h10", fill: "none" }, { r: "fade", o: [11.998, 12] }],
    ["path", { d: "M12 22v-4", fill: "none" }, { r: "fade", o: [11.998, 12] }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.1, o: [12, 12] }, "line"],
  ],
});
