import { createIcon } from "../runtime/createIcon.js";

export const FoldHorizontal = createIcon("FoldHorizontal", "fold-horizontal", {
  nodes: [
    ["path", { d: "M2 12h6" }, { r: "growX", o: [2, 12] }],
    ["path", { d: "M22 12h-6" }, { r: "growX", o: [22, 12] }],
    ["path", { d: "M12 2v2" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M12 8v2" }, { r: "fade", d: 0.04, o: [12, 12] }],
    ["path", { d: "M12 14v2" }, { r: "fade", d: 0.08, o: [12, 12] }],
    ["path", { d: "M12 20v2" }, { r: "fade", d: 0.12, o: [12, 12] }],
    ["path", { d: "m19 9-3 3 3 3" }, { r: "slide", x: -1, a: 2, o: [17.5, 12] }],
    ["path", { d: "m5 15 3-3-3-3" }, { r: "slide", x: 1, a: 2, o: [6.5, 12] }],
  ],
});
