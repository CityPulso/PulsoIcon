import { icon } from "../icon.js";

export const MoveUp = icon("MoveUp", "move-up", {
  nodes: [
    ["path", { d: "M8 6L12 2L16 6" }, { r: "shoot", y: -1, a: 4, o: [12, 12] }],
    ["path", { d: "M12 2V22" }, { r: "shoot", y: -1, a: 4, o: [12, 12] }],
  ],
});
