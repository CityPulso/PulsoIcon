import { icon } from "../icon.js";

export const Screwdriver = icon("Screwdriver", "screwdriver", {
  nodes: [
    ["rect", { x: "9", y: "2", width: "6", height: "9", rx: "2" }, { r: "turn", a: -20, o: [12, 21] }],
    ["path", { d: "M10 11v2h4v-2" }, { r: "turn", a: -20, o: [12, 21] }],
    ["path", { d: "M12 13v6" }, { r: "turn", a: -20, o: [12, 21] }],
    ["path", { d: "M11 19h2l-1 2.5z" }, { r: "turn", a: -20, o: [12, 21] }],
  ],
});
