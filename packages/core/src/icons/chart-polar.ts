import { icon } from "../icon.js";

// Drawn after Phosphor Icons "chart-polar" (MIT, Copyright (c) 2023 Phosphor Icons).
export const ChartPolar = icon("ChartPolar", "chart-polar", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "5" }, { r: "pulse", d: 0.1, o: [12, 12] }],
    ["path", { d: "M12 2v20M2 12h20" }, { r: "turn", a: 45, o: [12, 12] }],
  ],
});
