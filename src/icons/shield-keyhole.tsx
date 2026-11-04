import { createIcon } from "../runtime/createIcon.js";

export const ShieldKeyhole = createIcon("ShieldKeyhole", "shield-keyhole", {
  nodes: [
    ["path", { d: "M12 13v3" }, { r: "turn", d: 0.05, a: 30, o: [12, 11] }],
    [
      "path",
      { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 01-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 011-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 011.52 0C14.51 3.81 17 5 19 5a1 1 0 011 1z" },
      { r: "press", a: 0.04, o: [12, 12.001] },
    ],
    ["circle", { cx: "12", cy: "11", r: "2" }, { r: "turn", d: 0.05, a: 30, o: [12, 11] }],
  ],
});
