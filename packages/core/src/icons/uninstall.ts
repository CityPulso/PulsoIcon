import { icon } from "../icon.js";

export const Uninstall = icon("Uninstall", "uninstall", {
  nodes: [
    ["path", { d: "M8 5H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3" }, { r: "press", a: 0.04, o: [12, 21] }],
    ["path", { d: "M12 13V2" }, { r: "shoot", y: -1, a: 3, o: [12, 8] }],
    ["path", { d: "m8 6 4-4 4 4" }, { r: "shoot", y: -1, a: 3, o: [12, 8] }],
    ["path", { d: "M8 17h8" }, { r: "fade", d: 0.1, o: [12, 17] }],
  ],
});
