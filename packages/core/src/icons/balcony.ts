import { icon } from "../icon.js";

export const Balcony = icon("Balcony", "balcony", {
  nodes: [
    ["path", { d: "M8 14V6a4 4 0 0 1 8 0v8" }, { r: "flip", o: [12, 8] }],
    ["path", { d: "M12 2v12" }, { r: "flip", o: [12, 8] }],
    ["path", { d: "M3 14h18" }, { r: "growX", o: [12, 14] }],
    ["path", { d: "M4 14v7M8 14v7M12 14v7M16 14v7M20 14v7" }, { r: "grow", d: 0.1, o: [12, 21] }],
    ["path", { d: "M2 21h20" }, { r: "growX", o: [12, 21] }],
  ],
});
