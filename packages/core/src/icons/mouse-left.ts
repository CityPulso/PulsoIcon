import { icon } from "../icon.js";

export const MouseLeft = icon("MouseLeft", "mouse-left", {
  nodes: [
    ["path", { d: "M12 7.318V10" }, { r: "fade", o: [12, 8.659] }],
    ["path", { d: "M5 10v5a7 7 0 0 0 14 0V9c0-3.527-2.608-6.515-6-7" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["circle", { cx: "7", cy: "4", r: "2" }, { r: "press", d: 0.05, a: 0.3, o: [7, 4] }],
  ],
});
