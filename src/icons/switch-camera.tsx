import { createIcon } from "../runtime/createIcon.js";

export const SwitchCamera = createIcon("SwitchCamera", "switch-camera", {
  nodes: [
    ["path", { d: "M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5" }, { r: "slide", x: -1, a: 1, o: [6.5, 10.5] }],
    ["path", { d: "M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5" }, { r: "slide", x: 1, a: 1, o: [17.5, 13.5] }],
    ["circle", { cx: "12", cy: "12", r: "3" }, { r: "spin", a: 180, o: [12, 12] }],
    ["path", { d: "m18 22-3-3 3-3" }, { r: "slide", x: 1, a: 1, o: [17.5, 13.5] }],
    ["path", { d: "m6 2 3 3-3 3" }, { r: "slide", x: -1, a: 1, o: [6.5, 10.5] }],
  ],
});
