import { icon } from "../icon.js";

export const Closet = icon("Closet", "closet", {
  nodes: [
    ["path", { d: "M12 3H6a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h6z" }, { r: "open", o: [8, 11.5] }],
    ["path", { d: "M12 3h6a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-6z" }, { r: "open", d: 0.08, o: [16, 11.5] }],
    ["path", { d: "M10 10v3" }, { r: "open", o: [8, 11.5] }],
    ["path", { d: "M14 10v3" }, { r: "open", d: 0.08, o: [16, 11.5] }],
    ["path", { d: "M6 20v2M18 20v2" }, { r: "fade", o: [12, 21] }],
  ],
});
