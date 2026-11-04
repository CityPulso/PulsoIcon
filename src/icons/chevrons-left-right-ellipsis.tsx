import { createIcon } from "../runtime/createIcon.js";

export const ChevronsLeftRightEllipsis = createIcon("ChevronsLeftRightEllipsis", "chevrons-left-right-ellipsis", {
  nodes: [
    ["path", { d: "M12 12h.01" }, { r: "pop", d: 0.06, o: [12.005, 12] }],
    ["path", { d: "M16 12h.01" }, { r: "pop", d: 0.12, o: [16.005, 12] }],
    ["path", { d: "m17 7 5 5-5 5" }, { r: "slide", x: 1, a: 1.5, o: [19.5, 12] }],
    ["path", { d: "m7 7-5 5 5 5" }, { r: "slide", x: -1, a: 1.5, o: [4.5, 12] }],
    ["path", { d: "M8 12h.01" }, { r: "pop", o: [8.005, 12] }],
  ],
});
