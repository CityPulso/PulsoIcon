import { createIcon } from "../runtime/createIcon.js";

export const ListFilterPlus = createIcon("ListFilterPlus", "list-filter-plus", {
  nodes: [
    ["path", { d: "M12 5H2" }, { r: "growX", o: [7, 5] }],
    ["path", { d: "M6 12h12" }, { r: "growX", d: 0.06, o: [12, 12] }],
    ["path", { d: "M9 19h6" }, { r: "growX", d: 0.12, o: [12, 19] }],
    ["path", { d: "M16 5h6" }, { r: "spin", d: 0.2, a: 90, o: [19, 5] }],
    ["path", { d: "M19 8V2" }, { r: "spin", d: 0.2, a: 90, o: [19, 5] }],
  ],
});
