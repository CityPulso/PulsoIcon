import { createIcon } from "../runtime/createIcon.js";

export const FileVideoCamera = createIcon("FileVideoCamera", "file-video-camera", {
  nodes: [
    ["path", { d: "M4 12V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "m10 17.843 3.033-1.755a.64.64 0 0 1 .967.56v4.704a.65.65 0 0 1-.967.56L10 20.157" }, { r: "jelly", d: 0.2, o: [12, 18.996] }],
    ["rect", { width: "7", height: "6", x: "3", y: "16", rx: "1" }, { r: "slide", d: 0.1, x: 1, a: 1, o: [6.5, 19] }],
  ],
});
