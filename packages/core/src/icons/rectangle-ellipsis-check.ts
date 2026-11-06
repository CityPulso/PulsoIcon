import { icon } from "../icon.js";

export const RectangleEllipsisCheck = icon("RectangleEllipsisCheck", "rectangle-ellipsis-check", {
  nodes: [
    ["path", { d: "M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M7 12h.01" }, { r: "bounce", d: 0.05, y: -1, a: 1.5, o: [7.005, 12] }],
    ["path", { d: "M12 12h.01" }, { r: "bounce", d: 0.13, y: -1, a: 1.5, o: [12.005, 12] }],
    ["path", { d: "M17 12h.01" }, { r: "bounce", d: 0.21, y: -1, a: 1.5, o: [17.005, 12] }],
    ["path", { d: "m15 19 2 2 4-4" }, { r: "draw", d: 0.3, o: [18, 19] }],
  ],
});
