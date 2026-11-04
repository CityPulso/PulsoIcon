import { createIcon } from "../runtime/createIcon.js";

export const SaveCheck = createIcon("SaveCheck", "save-check", {
  nodes: [
    ["path", { d: "M12.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4v4.35" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "m16 19 2 2 4-4" }, { r: "draw", d: 0.15, o: [19, 19] }],
    ["path", { d: "M17 15.13V14a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" }, { r: "fade", d: 0.05, o: [12, 12] }],
    ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7" }, { r: "fade", d: 0.05, o: [12, 12] }],
  ],
});
