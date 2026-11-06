import { icon } from "../icon.js";

export const BorderRight = icon("BorderRight", "border-right", {
  nodes: [
    [
      "path",
      {
        d: "M3 3h.01M7.5 3h.01M12 3h.01M16.5 3h.01M3 7.5h.01M12 7.5h.01M3 12h.01M7.5 12h.01M12 12h.01M16.5 12h.01M3 16.5h.01M12 16.5h.01M3 21h.01M7.5 21h.01M12 21h.01M16.5 21h.01",
      },
      { r: "fade", d: 0.1, o: [12, 12] },
    ],
    ["path", { d: "M21 3v18" }, { r: "draw", d: 0, o: [21, 12] }],
  ],
});
