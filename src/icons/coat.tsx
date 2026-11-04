import { createIcon } from "../runtime/createIcon.js";

export const Coat = createIcon("Coat", "coat", {
  nodes: [
    [
      "path",
      { d: "M9 2 4.3 3.6A2 2 0 0 0 3 5.5V18a1 1 0 0 0 1 1h2v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-2h2a1 1 0 0 0 1-1V5.5a2 2 0 0 0-1.3-1.9L15 2" },
      { r: "swing", a: 5, o: [12, 2] },
    ],
    ["path", { d: "m9 2 3 7 3-7" }, { r: "swing", a: 5, o: [12, 2] }],
    ["path", { d: "M12 9v13" }, { r: "swing", a: 5, o: [12, 2] }],
    ["path", { d: "M6 10v9" }, { r: "swing", a: 5, o: [12, 2] }],
    ["path", { d: "M18 10v9" }, { r: "swing", a: 5, o: [12, 2] }],
  ],
});
