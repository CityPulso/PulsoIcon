import { createIcon } from "../runtime/createIcon.js";

export const Clock10 = createIcon("Clock10", "clock-10", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M12 6v6l-4-2" }, { r: "spin", a: 360, o: [12, 12] }],
  ],
});
