import { createIcon } from "../runtime/createIcon.js";

export const MirrorRound = createIcon("MirrorRound", "mirror-round", {
  nodes: [
    ["path", { d: "M10 6.6 8.6 8" }, { r: "swing", a: 6, o: [12, 18] }],
    ["path", { d: "M12 18v4" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M15 7.5 9.5 13" }, { r: "swing", a: 6, o: [12, 18] }],
    ["path", { d: "M7 22h10" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["circle", { cx: "12", cy: "10", r: "8" }, { r: "swing", a: 6, o: [12, 18] }],
  ],
});
