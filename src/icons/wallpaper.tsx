import { createIcon } from "../runtime/createIcon.js";

export const Wallpaper = createIcon("Wallpaper", "wallpaper", {
  nodes: [
    ["path", { d: "M12 17v4" }, { r: "fade", o: [12, 19] }],
    ["path", { d: "M8 21h8" }, { r: "fade", o: [12, 19] }],
    ["path", { d: "m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15" }, { r: "draw", d: 0.12, o: [15.5, 13.664] }],
    ["circle", { cx: "8", cy: "9", r: "2" }, { r: "rise", d: 0.05, a: 2, o: [8, 9] }],
    ["rect", { x: "2", y: "3", width: "20", height: "14", rx: "2" }, { r: "press", a: 0.04, o: [12, 10] }],
  ],
});
