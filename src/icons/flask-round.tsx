import { createIcon } from "../runtime/createIcon.js";

export const FlaskRound = createIcon("FlaskRound", "flask-round", {
  nodes: [
    ["path", { d: "M10 2v6.292a7 7 0 1 0 4 0V2" }, { r: "sway", a: 8, o: [12, 22] }],
    ["path", { d: "M5 15h14" }, { r: "redraw", d: 0.1, o: [12, 15] }],
    ["path", { d: "M8.5 2h7" }, { r: "sway", a: 8, o: [12, 22] }],
  ],
});
