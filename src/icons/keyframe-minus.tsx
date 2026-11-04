import { createIcon } from "../runtime/createIcon.js";

export const KeyframeMinus = createIcon("KeyframeMinus", "keyframe-minus", {
  nodes: [
    [
      "path",
      { d: "M9.3 3.7A1.697 1.697 0 0 1 11.7 3.7L17.3 9.3A1.697 1.697 0 0 1 17.3 11.7L11.7 17.3A1.697 1.697 0 0 1 9.3 17.3L3.7 11.7A1.697 1.697 0 0 1 3.7 9.3Z" },
      { r: "spin", a: 90, o: [10.5, 10.5] },
    ],
    ["path", { d: "M15 18h6" }, { r: "pop", d: 0.15, o: [18, 18] }],
  ],
});
