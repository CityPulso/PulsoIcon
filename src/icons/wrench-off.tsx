import { createIcon } from "../runtime/createIcon.js";

export const WrenchOff = createIcon("WrenchOff", "wrench-off", {
  nodes: [
    [
      "path",
      {
        d: "M10.747 5.093a6 6 0 0 1 6.841-2.882c.438.12.54.662.219.984L14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-2.882 6.842",
      },
      { r: "turn", a: -14, o: [6, 18] },
    ],
    ["path", { d: "m13.5 13.5-7.88 7.88a1 1 0 0 1-2.999-3l7.88-7.88" }, { r: "turn", a: -14, o: [6, 18] }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.1, o: [12, 12] }],
  ],
});
