import { icon } from "../icon.js";

export const Kanban = icon("Kanban", "kanban", {
  nodes: [
    ["path", { d: "M5 3v14" }, { r: "grow", o: [5, 3] }],
    ["path", { d: "M12 3v8" }, { r: "grow", d: 0.08, o: [12, 3] }],
    ["path", { d: "M19 3v18" }, { r: "grow", d: 0.16, o: [19, 3] }],
  ],
});
