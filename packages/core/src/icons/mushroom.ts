import { icon } from "../icon.js";

export const Mushroom = icon("Mushroom", "mushroom", {
  nodes: [
    ["path", { d: "M3 12a9 8 0 0 1 18 0Z" }, { r: "jelly", a: 0.1, o: [12, 21] }],
    ["path", { d: "M9 12v7a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-7" }, { r: "jelly", a: 0.1, o: [12, 21] }],
    ["path", { d: "M8.5 8.5h.01" }, { r: "pop", d: 0.2, o: [8.5, 8.5] }],
    ["path", { d: "M12 6.5h.01" }, { r: "pop", d: 0.25, o: [12, 6.5] }],
    ["path", { d: "M15.5 9h.01" }, { r: "pop", d: 0.3, o: [15.5, 9] }],
  ],
});
