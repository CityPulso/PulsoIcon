import { createIcon } from "../runtime/createIcon.js";

export const Clock12 = createIcon("Clock12", "clock-12", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M12 6v6" }, { r: "spin", a: 360, o: [12, 12] }],
  ],
});
