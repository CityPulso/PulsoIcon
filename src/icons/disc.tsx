import { createIcon } from "../runtime/createIcon.js";

export const Disc = createIcon("Disc", "disc", {
  svg: { r: "spin", a: 360 },
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["circle", { cx: "12", cy: "12", r: "2" }],
  ],
});
