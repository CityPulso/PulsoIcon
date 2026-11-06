import { icon } from "../icon.js";

export const TrainFrontTunnel = icon("TrainFrontTunnel", "train-front-tunnel", {
  nodes: [
    ["path", { d: "M2 22V12a10 10 0 1 1 20 0v10" }, { r: "press", a: 0.03, o: [12, 12] }],
    ["path", { d: "M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8" }, { r: "bounce", y: -1, a: 1, o: [12, 12.5] }],
    ["path", { d: "M10 15h.01" }, { r: "flicker", d: 0.1, o: [12.005, 15] }],
    ["path", { d: "M14 15h.01" }, { r: "flicker", d: 0.16, o: [12.005, 15] }],
    ["path", { d: "M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z" }, { r: "bounce", y: -1, a: 1, o: [12, 12.5] }],
    ["path", { d: "m9 19-2 3" }, { r: "fade", o: [12, 20.5] }],
    ["path", { d: "m15 19 2 3" }, { r: "fade", o: [12, 20.5] }],
  ],
});
