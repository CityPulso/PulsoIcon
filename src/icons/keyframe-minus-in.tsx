import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "keyframe-minus-in" (MIT, Copyright (c) 2021 Luca Burgio).
export const KeyframeMinusIn = createIcon("KeyframeMinusIn", "keyframe-minus-in", {
  nodes: [
    ["path", { d: "M9 12H12H15" }, { r: "growX", d: 0.2, o: [12, 12] }],
    [
      "path",
      {
        d: "M20.777 13.3453L13.4799 21.3721C12.6864 22.245 11.3136 22.245 10.5201 21.3721L3.22304 13.3453C2.52955 12.5825 2.52955 11.4175 3.22304 10.6547L10.5201 2.62787C11.3136 1.755 12.6864 1.755 13.4799 2.62787L20.777 10.6547C21.4705 11.4175 21.4705 12.5825 20.777 13.3453Z",
      },
      { r: "spin", a: 90, o: [12, 12] },
    ],
  ],
});
