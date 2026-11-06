import { icon } from "../icon.js";

export const Briefcase = icon("Briefcase", "briefcase", {
  nodes: [
    ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" }, { r: "lift", o: [12, 11] }],
    ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2" }, { r: "press", a: 0.05, o: [12, 13] }],
  ],
});
