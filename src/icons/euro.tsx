import { createIcon } from "../runtime/createIcon.js";

export const Euro = createIcon("Euro", "euro", {
  nodes: [
    ["path", { d: "M4 10h12" }, { r: "growX", d: 0.2, o: [4, 10] }],
    ["path", { d: "M4 14h9" }, { r: "growX", d: 0.28, o: [4, 14] }],
    ["path", { d: "M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2" }, { r: "redraw", o: [12.5, 12] }],
  ],
});
