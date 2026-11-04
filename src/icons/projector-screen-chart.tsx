import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "projector-screen-chart" (MIT, Copyright (c) 2023 Phosphor Icons).

export const ProjectorScreenChart = createIcon("ProjectorScreenChart", "projector-screen-chart", {
  nodes: [
    ["path", { d: "M2 4h20" }, { r: "press", a: 0.05, o: [12, 4] }],
    ["path", { d: "M4 4v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4" }, { r: "grow", o: [12, 4] }],
    ["path", { d: "M12 16v2.5" }, { r: "slide", d: 0.35, y: 1, a: 1, o: [12, 18] }],
    ["circle", { cx: "12", cy: "20", r: "1.5" }, { r: "slide", d: 0.35, y: 1, a: 1, o: [12, 20] }],
    ["path", { d: "M8.5 12.5v-2" }, { r: "grow", d: 0.4, o: [8.5, 12.5] }],
    ["path", { d: "M12 12.5V9" }, { r: "grow", d: 0.48, o: [12, 12.5] }],
    ["path", { d: "M15.5 12.5v-5" }, { r: "grow", d: 0.56, o: [15.5, 12.5] }],
  ],
});
