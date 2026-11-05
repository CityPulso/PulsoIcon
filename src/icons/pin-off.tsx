import { createIcon } from "../runtime/createIcon.js";

export const PinOff = createIcon("PinOff", "pin-off", {
  nodes: [
    ["path", { d: "M12 17v5" }, { r: "bounce", y: -1, a: 2, o: [11.5, 12] }],
    ["path", { d: "M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89" }, { r: "bounce", y: -1, a: 2, o: [11.5, 12] }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.1, o: [12, 12] }],
    ["path", { d: "M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11" }, { r: "bounce", y: -1, a: 2, o: [11.5, 12] }],
  ],
  solid: [
    ["path", { d: "M12 17v5", fill: "none" }, { r: "bounce", y: -1, a: 2, o: [11.5, 12] }],
    [
      "path",
      {
        d: "M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",
      },
      { r: "bounce", y: -1, a: 2, o: [11.5, 12] },
    ],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.1, o: [12, 12] }, "line"],
  ],
});
