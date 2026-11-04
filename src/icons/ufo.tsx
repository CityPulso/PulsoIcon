import { createIcon } from "../runtime/createIcon.js";

export const Ufo = createIcon("Ufo", "ufo", {
  nodes: [
    ["ellipse", { cx: "12", cy: "13", rx: "10", ry: "3.5" }, { r: "float", a: 1.5, o: [12, 12] }],
    ["path", { d: "M7 10a5 5 0 0 1 10 0" }, { r: "float", a: 1.5, o: [12, 12] }],
    ["path", { d: "M7 13h.01M12 13.5h.01M17 13h.01" }, { r: "flicker", d: 0.1, o: [12, 13] }],
    ["path", { d: "M9 19 7.5 21M15 19l1.5 2" }, { r: "fade", d: 0.2, o: [12, 20] }],
  ],
});
