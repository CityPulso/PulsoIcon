import { createIcon } from "../runtime/createIcon.js";

export const Clock3 = createIcon("Clock3", "clock-3", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M12 6v6h4" }, { r: "spin", a: 360, o: [12, 12] }],
  ],
});
