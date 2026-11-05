import { createIcon } from "../runtime/createIcon.js";

export const FlaskConicalOff = createIcon("FlaskConicalOff", "flask-conical-off", {
  nodes: [
    ["path", { d: "M10 2v2.343" }, { r: "sway", a: 8, o: [12, 22] }],
    ["path", { d: "M14 2v6.343" }, { r: "sway", a: 8, o: [12, 22] }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.15, o: [12, 12] }],
    ["path", { d: "M20 20a2 2 0 0 1-2 2H6a2 2 0 0 1-1.755-2.96l5.227-9.563" }, { r: "sway", a: 8, o: [12, 22] }],
    ["path", { d: "M6.453 15H15" }, { r: "sway", a: 8, o: [12, 22] }],
    ["path", { d: "M8.5 2h7" }, { r: "sway", a: 8, o: [12, 22] }],
  ],
  solid: [
    ["path", { d: "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2" }, { r: "sway", a: 8, o: [12, 22] }],
    ["path", { d: "M6.453 15h11.094" }, { r: "sway", a: 8, o: [12, 22] }, "line"],
    ["path", { d: "M8.5 2h7", fill: "none" }, { r: "sway", a: 8, o: [12, 22] }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
