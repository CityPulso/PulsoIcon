import { createIcon } from "../runtime/createIcon.js";

export const CaptionsOff = createIcon("CaptionsOff", "captions-off", {
  nodes: [
    ["path", { d: "M10.5 5H19a2 2 0 0 1 2 2v8.5" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M17 11h-.5" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.15, o: [12, 12] }],
    ["path", { d: "M7 11h4" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M7 15h2.5" }, { r: "fade", o: [12, 12] }],
  ],
  solid: [
    ["rect", { width: "18", height: "14", x: "3", y: "5", rx: "2", ry: "2" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M7 15h 4" }, { r: "fade", o: [12, 12] }, "line"],
    ["path", { d: "M15 15h 2" }, { r: "fade", o: [12, 12] }, "line"],
    ["path", { d: "M7 11h 2" }, { r: "fade", o: [12, 12] }, "line"],
    ["path", { d: "M13 11h 4" }, { r: "fade", o: [12, 12] }, "line"],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
