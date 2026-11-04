import { createIcon } from "../runtime/createIcon.js";

export const Sweater = createIcon("Sweater", "sweater", {
  nodes: [
    [
      "path",
      {
        d: "M8.5 3 4.7 4.3a3 3 0 0 0-2 2.7L2 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-8 10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V11v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1l-.7-12a3 3 0 0 0-2-2.7L15.5 3",
      },
      { r: "swing", a: 5, o: [12, 3] },
    ],
    ["path", { d: "M8.5 3a3.5 2.5 0 0 0 7 0" }, { r: "swing", a: 5, o: [12, 3] }],
    ["path", { d: "M6 19h12" }, { r: "swing", a: 5, o: [12, 3] }],
    ["path", { d: "M2.1 17H6" }, { r: "swing", a: 5, o: [12, 3] }],
    ["path", { d: "M18 17h3.9" }, { r: "swing", a: 5, o: [12, 3] }],
  ],
});
