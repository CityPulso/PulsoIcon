import { createIcon } from "../runtime/createIcon.js";

export const MapPlus = createIcon("MapPlus", "map-plus", {
  nodes: [
    [
      "path",
      {
        d: "m11 19-1.106-.552a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619V12",
      },
      { r: "fold", o: [12, 12] },
    ],
    ["path", { d: "M15 5.764V12" }, { r: "fade", o: [15, 8.882] }],
    ["path", { d: "M18 15v6" }, { r: "spin", d: 0.2, a: 90, o: [18, 18] }],
    ["path", { d: "M21 18h-6" }, { r: "spin", d: 0.2, a: 90, o: [18, 18] }],
    ["path", { d: "M9 3.236v15" }, { r: "fold", o: [12, 12] }],
  ],
});
