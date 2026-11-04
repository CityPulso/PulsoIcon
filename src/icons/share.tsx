import { createIcon } from "../runtime/createIcon.js";

export const Share = createIcon("Share", "share", {
  nodes: [
    ["path", { d: "M12 2v13" }, { r: "bounce", y: -1, a: 2, o: [12, 8.5] }],
    ["path", { d: "m16 6-4-4-4 4" }, { r: "bounce", y: -1, a: 2, o: [12, 8.5] }],
    ["path", { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" }, { r: "press", d: 0.1, a: 0.04, o: [12, 17] }],
  ],
});
