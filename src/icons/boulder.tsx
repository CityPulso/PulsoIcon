import { createIcon } from "../runtime/createIcon.js";

export const Boulder = createIcon("Boulder", "boulder", {
  nodes: [
    ["path", { d: "M3 19c-.5-4 1-9 4-11.5S13 4 16 5.5s5 6 5 13.5Z" }, { r: "wobble", a: 4, o: [12, 19] }],
    ["path", { d: "M7 8.5l3.5 3.5H16" }, { r: "fade", d: 0.1, o: [12, 12] }],
    ["path", { d: "M10.5 12 9 19" }, { r: "fade", d: 0.1, o: [12, 12] }],
    ["path", { d: "M2 19h20" }, { r: "growX", o: [12, 19] }],
  ],
});
