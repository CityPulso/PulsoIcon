import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "eyedropper-sample" (MIT, Copyright (c) 2023 Phosphor Icons).
export const EyedropperSample = createIcon("EyedropperSample", "eyedropper-sample", {
  nodes: [
    ["path", { d: "m12 9-8.414 8.414A2 2 0 0 0 3 18.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 3.828 21h1.344a2 2 0 0 0 1.414-.586L15 12" }],
    ["path", { d: "m5 19 4.5-4.5" }, { r: "draw", d: 0.15 }],
    ["path", { d: "m18 9 .4.4a1 1 0 1 1-3 3l-3.8-3.8a1 1 0 1 1 3-3l.4.4 3.4-3.4a1 1 0 1 1 3 3z" }, { r: "press", a: 0.1, o: [16.5, 7.5] }],
  ],
});
