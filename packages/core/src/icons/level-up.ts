import { icon } from "../icon.js";

export const LevelUp = icon("LevelUp", "level-up", {
  nodes: [
    [
      "path",
      { d: "M9 16v-3a1 1 0 0 0-1-1H5.061a1 1 0 0 1-.75-1.811l6.836-6.835a1.207 1.207 0 0 1 1.707 0l6.835 6.835a1 1 0 0 1-.75 1.811H16a1 1 0 0 0-1 1v3z" },
      { r: "bounce", y: -1, a: 2, o: [12, 10] },
    ],
    ["path", { d: "M9 19h6" }, { r: "growX", d: 0.15, o: [12, 19] }],
    ["path", { d: "M10 22h4" }, { r: "growX", d: 0.25, o: [12, 22] }],
  ],
});
