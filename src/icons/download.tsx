import { createIcon } from "../runtime/createIcon.js";

export const Download = createIcon("Download", "download", {
  nodes: [
    ["path", { d: "M12 15V3" }, { r: "bounce", y: 1, a: 3, o: [12, 9] }],
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }, { r: "press", d: 0.15, a: 0.06, o: [12, 21] }],
    ["path", { d: "m7 10 5 5 5-5" }, { r: "bounce", y: 1, a: 3, o: [12, 9] }],
  ],
});
