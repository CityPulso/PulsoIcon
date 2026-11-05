import { createIcon } from "../runtime/createIcon.js";

export const CameraOff = createIcon("CameraOff", "camera-off", {
  nodes: [
    ["path", { d: "M14.564 14.558a3 3 0 1 1-4.122-4.121" }, { r: "blink", o: [12, 12] }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.15, o: [12, 12] }],
    ["path", { d: "M20 20H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 .819-.175" }, { r: "blink", o: [12, 12] }],
    ["path", { d: "M9.695 4.024A2 2 0 0 1 10.004 4h3.993a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v7.344" }, { r: "blink", o: [12, 12] }],
  ],
  solid: [
    [
      "path",
      {
        d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",
      },
      { r: "blink", o: [12, 12] },
    ],
    ["circle", { cx: "12", cy: "13", r: "3" }, { r: "blink", o: [12, 12] }, "cut"],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
