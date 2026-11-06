import { icon } from "../icon.js";

export const BorderBottom = icon("BorderBottom", "border-bottom", {
  nodes: [
    [
      "path",
      {
        d: "M3 3h.01M7.5 3h.01M12 3h.01M16.5 3h.01M21 3h.01M3 7.5h.01M12 7.5h.01M21 7.5h.01M3 12h.01M7.5 12h.01M12 12h.01M16.5 12h.01M21 12h.01M3 16.5h.01M12 16.5h.01M21 16.5h.01",
      },
      { r: "fade", d: 0.1, o: [12, 12] },
    ],
    ["path", { d: "M3 21h18" }, { r: "draw", d: 0, o: [12, 21] }],
  ],
});
