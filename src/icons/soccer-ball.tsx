import { createIcon } from "../runtime/createIcon.js";

export const SoccerBall = createIcon("SoccerBall", "soccer-ball", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "roll", x: 1, a: 1.5, o: [12, 12] }],
    ["path", { d: "M12 8.5 15.3 10.9 14.1 14.8H9.9L8.7 10.9z" }, { r: "roll", x: 1, a: 1.5, o: [12, 12] }],
    ["path", { d: "M12 8.5V2" }, { r: "roll", x: 1, a: 1.5, o: [12, 12] }],
    ["path", { d: "m15.3 10.9 6.2-2" }, { r: "roll", x: 1, a: 1.5, o: [12, 12] }],
    ["path", { d: "m14.1 14.8 3.8 5.3" }, { r: "roll", x: 1, a: 1.5, o: [12, 12] }],
    ["path", { d: "m9.9 14.8-3.8 5.3" }, { r: "roll", x: 1, a: 1.5, o: [12, 12] }],
    ["path", { d: "m8.7 10.9-6.2-2" }, { r: "roll", x: 1, a: 1.5, o: [12, 12] }],
  ],
});
