import { createIcon } from "../runtime/createIcon.js";

export const ClosedCaptionAi = createIcon("ClosedCaptionAi", "closed-caption-ai", {
  nodes: [
    ["path", { d: "M22 13V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10.5" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M9 9.17a3 3 0 1 0 0 5.66" }, { r: "draw", d: 0.1, o: [7, 12] }],
    ["path", { d: "M15 9.17a3 3 0 1 0 0 5.66" }, { r: "draw", d: 0.2, o: [13, 12] }],
    ["path", { d: "M19 21.5a4 4 0 0 1 3-3 4 4 0 0 1-3-3 4 4 0 0 1-3 3 4 4 0 0 1 3 3" }, { r: "twinkle", d: 0.3, o: [19, 18.5] }],
  ],
});
