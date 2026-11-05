import { createIcon } from "../runtime/createIcon.js";

export const MouseOff = createIcon("MouseOff", "mouse-off", {
  nodes: [
    ["path", { d: "M12 6v.343" }, { r: "fade", o: [12, 12.001] }],
    ["path", { d: "M18.218 18.218A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218" }, { r: "fade", o: [12, 12.001] }],
    ["path", { d: "M19 13.343V9A7 7 0 0 0 8.56 2.902" }, { r: "fade", o: [12, 12.001] }],
    ["path", { d: "M22 22 2 2" }, { r: "draw", d: 0.1, o: [12, 12] }],
  ],
  solid: [
    ["rect", { x: "5", y: "2", width: "14", height: "20", rx: "7" }, { r: "fade", o: [12, 12.001] }],
    ["path", { d: "M12 6v4" }, { r: "fade", o: [12, 12.001] }, "line"],
    ["path", { d: "M22 22 2 2" }, { r: "draw", d: 0.1, o: [12, 12] }, "line"],
  ],
});
