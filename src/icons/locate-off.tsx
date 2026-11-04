import { createIcon } from "../runtime/createIcon.js";

export const LocateOff = createIcon("LocateOff", "locate-off", {
  nodes: [
    ["path", { d: "M12 19v3" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M12 2v3" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M18.89 13.24a7 7 0 0 0-8.13-8.13" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M19 12h3" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M2 12h3" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.15, o: [12, 12] }],
    ["path", { d: "M7.05 7.05a7 7 0 0 0 9.9 9.9" }, { r: "fade", o: [12, 12] }],
  ],
});
