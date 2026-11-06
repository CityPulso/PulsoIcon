import { icon } from "../icon.js";

export const FoldVertical = icon("FoldVertical", "fold-vertical", {
  nodes: [
    ["path", { d: "M12 22v-6" }, { r: "grow", o: [12, 22] }],
    ["path", { d: "M12 8V2" }, { r: "grow", o: [12, 2] }],
    ["path", { d: "M4 12H2" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M10 12H8" }, { r: "fade", d: 0.04, o: [12, 12] }],
    ["path", { d: "M16 12h-2" }, { r: "fade", d: 0.08, o: [12, 12] }],
    ["path", { d: "M22 12h-2" }, { r: "fade", d: 0.12, o: [12, 12] }],
    ["path", { d: "m15 19-3-3-3 3" }, { r: "slide", y: -1, a: 2, o: [12, 17.5] }],
    ["path", { d: "m15 5-3 3-3-3" }, { r: "slide", y: 1, a: 2, o: [12, 6.5] }],
  ],
});
