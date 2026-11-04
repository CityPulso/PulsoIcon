import { createIcon } from "../runtime/createIcon.js";

export const MoveDown = createIcon("MoveDown", "move-down", {
  nodes: [
    ["path", { d: "M8 18L12 22L16 18" }, { r: "shoot", y: 1, a: 4, o: [12, 12] }],
    ["path", { d: "M12 2V22" }, { r: "shoot", y: 1, a: 4, o: [12, 12] }],
  ],
});
