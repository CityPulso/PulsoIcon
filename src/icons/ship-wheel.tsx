import { createIcon } from "../runtime/createIcon.js";

export const ShipWheel = createIcon("ShipWheel", "ship-wheel", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "8" }, { r: "spin", a: 180, o: [12, 12] }],
    ["path", { d: "M12 2v7.5" }, { r: "spin", a: 180, o: [12, 12] }],
    ["path", { d: "m19 5-5.23 5.23" }, { r: "spin", a: 180, o: [12, 12] }],
    ["path", { d: "M22 12h-7.5" }, { r: "spin", a: 180, o: [12, 12] }],
    ["path", { d: "m19 19-5.23-5.23" }, { r: "spin", a: 180, o: [12, 12] }],
    ["path", { d: "M12 14.5V22" }, { r: "spin", a: 180, o: [12, 12] }],
    ["path", { d: "M10.23 13.77 5 19" }, { r: "spin", a: 180, o: [12, 12] }],
    ["path", { d: "M9.5 12H2" }, { r: "spin", a: 180, o: [12, 12] }],
    ["path", { d: "M10.23 10.23 5 5" }, { r: "spin", a: 180, o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "2.5" }, { r: "spin", a: 180, o: [12, 12] }],
  ],
});
