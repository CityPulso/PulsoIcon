import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "recycle-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const RecycleOff = createIcon("RecycleOff", "recycle-off", {
  nodes: [
    ["path", { d: "M12 17l-2 2l2 2m-2 -2h9m1.896 -2.071a2 2 0 0 0 -.146 -.679l-.55 -1" }, { r: "spin", a: 120, o: [12, 12] }],
    ["path", { d: "M8.536 11l-.732 -2.732l-2.732 .732m2.732 -.732l-4.5 7.794a2 2 0 0 0 1.506 2.89l1.141 .024" }, { r: "spin", a: 120, o: [12, 12] }],
    ["path", { d: "M15.464 11l2.732 .732l.732 -2.732m-.732 2.732l-4.5 -7.794a2 2 0 0 0 -3.256 -.14l-.591 .976" }, { r: "spin", a: 120, o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
});
