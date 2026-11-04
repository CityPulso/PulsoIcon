import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "projector-screen" (MIT, Copyright (c) 2023 Phosphor Icons).

export const ProjectorScreen = createIcon("ProjectorScreen", "projector-screen", {
  nodes: [
    ["path", { d: "M2 4h20" }, { r: "press", a: 0.05, o: [12, 4] }],
    ["path", { d: "M4 4v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4" }, { r: "grow", o: [12, 4] }],
    ["path", { d: "M12 16v2.5" }, { r: "slide", d: 0.35, y: 1, a: 1, o: [12, 18] }],
    ["circle", { cx: "12", cy: "20", r: "1.5" }, { r: "slide", d: 0.35, y: 1, a: 1, o: [12, 20] }],
  ],
});
