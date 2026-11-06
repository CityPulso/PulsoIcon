import { icon } from "../icon.js";

export const Lectern = icon("Lectern", "lectern", {
  nodes: [
    ["path", { d: "M15 13h4a2 2 0 001.901-1.38l1.057-4.333A1 1 0 0021 6H3a1 1 0 00-.958 1.287L3.1 11.621A2 2 0 005.001 13h4" }, { r: "float", a: 1, o: [12, 9.5] }],
    ["path", { d: "M15 22V11a1 1 0 00-1-1h-4a1 1 0 00-1 1v11" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M18 22H6" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M18 6V3a1 1 0 00-1-1h-3" }, { r: "swing", d: 0.1, a: 10, o: [16, 6] }],
  ],
});
