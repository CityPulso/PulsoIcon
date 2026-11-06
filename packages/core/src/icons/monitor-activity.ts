import { icon } from "../icon.js";

export const MonitorActivity = icon("MonitorActivity", "monitor-activity", {
  nodes: [
    ["path", { d: "M12 17v4" }, { r: "grow", d: 0.1, o: [12, 19] }],
    [
      "path",
      { d: "M18 10h-2.315a1 1 0 00-.932.64l-.787 2.034a.5.5 0 01-.932 0l-2.068-5.348a.5.5 0 00-.932 0l-.787 2.035a1 1 0 01-.932.639H6" },
      { r: "draw", d: 0.05, o: [12, 10] },
    ],
    ["path", { d: "M8 21h8" }, { r: "growX", d: 0.15, o: [12, 21] }],
    ["rect", { x: "2", y: "3", width: "20", height: "14", rx: "2" }, { r: "press", a: 0.04, o: [12, 10] }],
  ],
});
