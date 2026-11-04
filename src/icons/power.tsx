import { createIcon } from "../runtime/createIcon.js";

export const Power = createIcon("Power", "power", {
  nodes: [
    ["path", { d: "M12 2v10" }, { r: "grow", d: 0.2, o: [12, 12] }],
    ["path", { d: "M18.4 6.6a9 9 0 1 1-12.77.04" }, { r: "redraw", o: [12.035, 14.281] }],
  ],
});
