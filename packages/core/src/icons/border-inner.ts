import { icon } from "../icon.js";

export const BorderInner = icon("BorderInner", "border-inner", {
  nodes: [
    [
      "path",
      { d: "M3 3h.01M7.5 3h.01M16.5 3h.01M21 3h.01M3 7.5h.01M21 7.5h.01M3 16.5h.01M21 16.5h.01M3 21h.01M7.5 21h.01M16.5 21h.01M21 21h.01" },
      { r: "fade", d: 0.1, o: [12, 12] },
    ],
    ["path", { d: "M12 3v18" }, { r: "draw", o: [12, 12] }],
    ["path", { d: "M3 12h18" }, { r: "draw", d: 0.1, o: [12, 12] }],
  ],
});
