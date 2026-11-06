import { icon } from "../icon.js";

export const RotateCwClock = icon("RotateCwClock", "rotate-cw-clock", {
  nodes: [
    ["path", { d: "M12 7v5l4 2" }, { r: "spin", a: -360, o: [12, 12] }],
    ["path", { d: "M16 8h5V3" }, { r: "spin", a: 360, o: [12, 12] }],
    ["path", { d: "m21 8-2.3-2.3A9.7 9.7 0 0012 3a9 9 0 109 9" }, { r: "spin", a: 360, o: [12, 12] }],
  ],
});
