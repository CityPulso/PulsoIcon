import { createIcon } from "../runtime/createIcon.js";

export const Clock6 = createIcon("Clock6", "clock-6", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M12 6v10" }, { r: "spin", a: 360, o: [12, 12] }],
  ],
});
