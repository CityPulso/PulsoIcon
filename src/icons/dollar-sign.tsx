import { createIcon } from "../runtime/createIcon.js";

export const DollarSign = createIcon("DollarSign", "dollar-sign", {
  nodes: [
    ["path", { d: "M12 3v18" }, { r: "grow", d: 0.15, o: [12, 12] }],
    ["path", { d: "M17 5H9.5a1 1 0 000 7h5a1 1 0 010 7H6" }, { r: "redraw", o: [12, 12] }],
  ],
});
