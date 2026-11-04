import { createIcon } from "../runtime/createIcon.js";

export const EmiratiDirham = createIcon("EmiratiDirham", "emirati-dirham", {
  nodes: [
    ["path", { d: "M11 4a8 8 0 0 1 0 16H6.406A.4.4 0 0 1 6 19.594V4.406A.4.4 0 0 1 6.406 4z" }, { r: "redraw", o: [12.5, 12] }],
    ["path", { d: "M4 10h17" }, { r: "growX", d: 0.2, o: [12.5, 10] }],
    ["path", { d: "M4 14h17" }, { r: "growX", d: 0.28, o: [12.5, 14] }],
  ],
});
