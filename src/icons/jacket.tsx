import { createIcon } from "../runtime/createIcon.js";

export const Jacket = createIcon("Jacket", "jacket", {
  nodes: [
    [
      "path",
      { d: "M9 3 4.3 4.6A2 2 0 0 0 3 6.5V17a1 1 0 0 0 1 1h2v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-2h2a1 1 0 0 0 1-1V6.5a2 2 0 0 0-1.3-1.9L15 3" },
      { r: "swing", a: 5, o: [12, 3] },
    ],
    ["path", { d: "M9 3V2h6v1l-3 2z" }, { r: "swing", a: 5, o: [12, 3] }],
    ["path", { d: "M12 5v16" }, { r: "draw", d: 0.1, o: [12, 13] }],
    ["path", { d: "M8.5 14h1" }, { r: "swing", a: 5, o: [12, 3] }],
    ["path", { d: "M14.5 14h1" }, { r: "swing", a: 5, o: [12, 3] }],
  ],
});
