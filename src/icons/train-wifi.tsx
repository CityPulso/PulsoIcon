import { createIcon } from "../runtime/createIcon.js";

export const TrainWifi = createIcon("TrainWifi", "train-wifi", {
  nodes: [
    ["path", { d: "M9 20a4 4 0 0 1-4-4v-3a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3a4 4 0 0 1-4 4z" }, { r: "bounce", y: -1, a: 1, o: [12, 15] }],
    ["path", { d: "M8.5 10v1.5a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V10" }, { r: "bounce", y: -1, a: 1, o: [12, 15] }],
    ["path", { d: "M9 17h.01" }, { r: "flicker", d: 0.1, o: [12, 17] }],
    ["path", { d: "M15 17h.01" }, { r: "flicker", d: 0.16, o: [12, 17] }],
    ["path", { d: "m8 20-2 2" }],
    ["path", { d: "m16 20 2 2" }],
    ["path", { d: "M9.5 7a4 4 0 0 1 5 0" }, { r: "draw", d: 0.1, o: [12, 9] }],
    ["path", { d: "M7 4a8 8 0 0 1 10 0" }, { r: "draw", d: 0.22, o: [12, 9] }],
  ],
});
