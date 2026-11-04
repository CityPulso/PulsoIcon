import { createIcon } from "../runtime/createIcon.js";

export const SleeperChair = createIcon("SleeperChair", "sleeper-chair", {
  nodes: [
    ["path", { d: "M3 13V7a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v6" }, { r: "turn", a: -25, o: [3, 13] }],
    ["rect", { x: "3", y: "13", width: "18", height: "4", rx: "1" }, { r: "press", a: 0.04, o: [12, 17] }],
    ["path", { d: "M5 17v3M19 17v3" }, { r: "press", a: 0.04, o: [12, 17] }],
  ],
});
