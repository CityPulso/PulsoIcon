import { createIcon } from "../runtime/createIcon.js";

export const MapMinus = createIcon("MapMinus", "map-minus", {
  nodes: [
    [
      "path",
      {
        d: "m11 19-1.106-.552a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619V14",
      },
      { r: "fold", o: [12, 12] },
    ],
    ["path", { d: "M15 5.764V14" }, { r: "fade", o: [15, 9.882] }],
    ["path", { d: "M21 18h-6" }, { r: "growX", d: 0.2, o: [18, 18] }],
    ["path", { d: "M9 3.236v15" }, { r: "fold", o: [12, 12] }],
  ],
});
