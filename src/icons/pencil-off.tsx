import { createIcon } from "../runtime/createIcon.js";

// Solid from Tabler Icons "pencil" filled (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PencilOff = createIcon("PencilOff", "pencil-off", {
  nodes: [
    ["path", { d: "m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982" }, { r: "tilt", a: 10, o: [3, 21] }],
    ["path", { d: "m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353" }, { r: "tilt", a: 10, o: [3, 21] }],
    ["path", { d: "m15 5 4 4" }, { r: "tilt", a: 10, o: [3, 21] }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.1, o: [12, 12] }],
  ],
  solid: [
    [
      "path",
      {
        d: "M12.085 6.5l5.415 5.415l-8.793 8.792a1 1 0 0 1 -.707 .293h-4a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 .293 -.707zm5.406 -2.698a3.828 3.828 0 0 1 1.716 6.405l-.292 .293l-5.415 -5.415l.293 -.292a3.83 3.83 0 0 1 3.698 -.991",
        stroke: "none",
      },
      { r: "tilt", a: 10, o: [3, 21] },
    ],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.1, o: [12, 12] }, "line"],
  ],
});
