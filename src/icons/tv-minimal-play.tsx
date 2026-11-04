import { createIcon } from "../runtime/createIcon.js";

export const TvMinimalPlay = createIcon("TvMinimalPlay", "tv-minimal-play", {
  nodes: [
    ["path", { d: "M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z" }, { r: "pop", d: 0.05, a: 0.3, o: [12.678, 10] }],
    ["path", { d: "M7 21h10" }, { r: "growX", d: 0.1, o: [12, 21] }],
    ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 10] }],
  ],
});
