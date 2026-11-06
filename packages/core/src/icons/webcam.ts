import { icon } from "../icon.js";

export const Webcam = icon("Webcam", "webcam", {
  nodes: [
    ["circle", { cx: "12", cy: "10", r: "8" }, { r: "press", a: 0.04, o: [12, 10] }],
    ["circle", { cx: "12", cy: "10", r: "3" }, { r: "blink", d: 0.05, o: [12, 10] }],
    ["path", { d: "M7 22h10" }, { r: "fade", o: [12, 20] }],
    ["path", { d: "M12 22v-4" }, { r: "fade", o: [12, 20] }],
  ],
});
