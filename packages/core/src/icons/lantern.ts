import { icon } from "../icon.js";

export const Lantern = icon("Lantern", "lantern", {
  nodes: [
    ["path", { d: "M10 4a2 2 0 0 1 4 0" }, { r: "swing", a: 6, o: [12, 2] }],
    ["path", { d: "M9 4h6l2 3H7z" }, { r: "swing", a: 6, o: [12, 2] }],
    ["path", { d: "M8 7v11M16 7v11" }, { r: "swing", a: 6, o: [12, 2] }],
    ["path", { d: "M6 18h12v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z" }, { r: "swing", a: 6, o: [12, 2] }],
    ["path", { d: "M12 10c1 1 1.5 2 1.5 3a1.5 1.5 0 0 1-3 0c0-1 .5-2 1.5-3z" }, { r: "flicker", d: 0.1, o: [12, 13] }],
  ],
});
