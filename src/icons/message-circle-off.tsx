import { createIcon } from "../runtime/createIcon.js";

export const MessageCircleOff = createIcon("MessageCircleOff", "message-circle-off", {
  nodes: [
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.15, o: [12, 12] }],
    [
      "path",
      { d: "M4.93 4.929a10 10 0 0 0-1.938 11.412 2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 0 0 11.302-1.989" },
      { r: "press", a: 0.04, o: [11.994, 12.002] },
    ],
    ["path", { d: "M8.35 2.69A10 10 0 0 1 21.3 15.65" }, { r: "press", a: 0.04, o: [11.994, 12.002] }],
  ],
});
