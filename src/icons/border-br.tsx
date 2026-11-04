import { createIcon } from "../runtime/createIcon.js";

export const BorderBr = createIcon("BorderBr", "border-br", {
  nodes: [
    [
      "path",
      { d: "M3 3h.01M7.5 3h.01M12 3h.01M16.5 3h.01M3 7.5h.01M12 7.5h.01M3 12h.01M7.5 12h.01M12 12h.01M16.5 12h.01M3 16.5h.01M12 16.5h.01" },
      { r: "fade", d: 0.1, o: [12, 12] },
    ],
    ["path", { d: "M21 3V21H3" }, { r: "draw", o: [21, 21] }],
  ],
});
