import { createIcon } from "../runtime/createIcon.js";

export const SquareYuan = createIcon("SquareYuan", "square-yuan", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "m9 7 3 4.5L15 7" }, { r: "draw" }],
    ["path", { d: "M12 11.5V17" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M9 13h6" }, { r: "growX", d: 0.2, o: [12, 13] }],
  ],
});
