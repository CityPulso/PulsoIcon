import { createIcon } from "../runtime/createIcon.js";

export const MessageSquareChart = createIcon("MessageSquareChart", "message-square-chart", {
  nodes: [
    ["path", { d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" }, { r: "press", a: 0.04, o: [12, 12.5] }],
    ["path", { d: "M8 15v-3" }, { r: "grow", d: 0.05, o: [8, 15] }],
    ["path", { d: "M12 15V7" }, { r: "grow", d: 0.13, o: [12, 15] }],
    ["path", { d: "M16 15v-5" }, { r: "grow", d: 0.21, o: [16, 15] }],
  ],
});
