import { createIcon } from "../runtime/createIcon.js";

export const FaceSad = createIcon("FaceSad", "face-sad", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M7.5 8.5 10 7.5" }, { r: "fade", d: 0.05, o: [8.75, 8] }],
    ["path", { d: "M16.5 8.5 14 7.5" }, { r: "fade", d: 0.05, o: [15.25, 8] }],
    ["path", { d: "M9 11v.5" }, { r: "blink", d: 0.1, o: [12, 11.25] }],
    ["path", { d: "M15 11v.5" }, { r: "blink", d: 0.1, o: [12, 11.25] }],
    ["path", { d: "M8 17a5 5 0 0 1 8 0" }, { r: "fold", d: 0.15, o: [12, 16] }],
  ],
});
