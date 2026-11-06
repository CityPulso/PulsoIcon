import { icon } from "../icon.js";

export const Box3dThreePoints = icon("Box3dThreePoints", "box-3d-three-points", {
  nodes: [
    [
      "path",
      { d: "M13.732 5 18.928 8M18.928 8 18.928 14M17.196 17 12 20M12 20 6.804 17M5.072 14 5.072 8M5.072 8 10.268 5M5.072 8 12 12M18.928 8 12 12M12 20 12 12" },
      { r: "jelly", a: 0.06, o: [12, 20] },
    ],
    ["circle", { cx: "12", cy: "4", r: "1.5" }, { r: "pop", d: 0, o: [12, 4] }],
    ["circle", { cx: "5.072", cy: "16", r: "1.5" }, { r: "pop", d: 0.1, o: [5.072, 16] }],
    ["circle", { cx: "18.928", cy: "16", r: "1.5" }, { r: "pop", d: 0.2, o: [18.928, 16] }],
  ],
});
