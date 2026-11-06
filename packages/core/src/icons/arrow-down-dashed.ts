import { icon } from "../icon.js";

export const ArrowDownDashed = icon("ArrowDownDashed", "arrow-down-dashed", {
  nodes: [
    ["path", { d: "M12 4v2" }, { r: "fade", o: [12, 5] }],
    ["path", { d: "M12 9v2" }, { r: "fade", d: 0.06, o: [12, 10] }],
    ["path", { d: "M12 14v5" }, { r: "bounce", d: 0.12, y: 1, a: 2, o: [12, 16.5] }],
    ["path", { d: "m19 12-7 7-7-7" }, { r: "bounce", d: 0.12, y: 1, a: 2, o: [12, 15.5] }],
  ],
});
