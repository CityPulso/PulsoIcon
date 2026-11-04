import { createIcon } from "../runtime/createIcon.js";

export const Golf = createIcon("Golf", "golf", {
  nodes: [
    ["path", { d: "M12 18V2" }, { r: "press", a: 0.04, o: [12, 18] }],
    ["path", { d: "M12 2l7 3.5-7 3.5" }, { r: "sway", a: 8, o: [12, 5.5] }],
    ["ellipse", { cx: "12", cy: "18.5", rx: "8", ry: "2.5" }, { r: "press", a: 0.04, o: [12, 18] }],
  ],
});
