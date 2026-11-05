import { createIcon } from "../runtime/createIcon.js";

export const SaveOff = createIcon("SaveOff", "save-off", {
  nodes: [
    ["path", { d: "M13 13H8a1 1 0 0 0-1 1v7" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M14 8h1" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M17 21v-4" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.1, o: [12, 12] }],
    ["path", { d: "M20.41 20.41A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 .59-1.41" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M9 3h6.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V15" }, { r: "fade", o: [12, 12] }],
  ],
  solid: [
    ["path", { d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" }, { r: "fade", o: [12, 12] }, "cut"],
    ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7" }, { r: "fade", o: [12, 12] }, "line"],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.1, o: [12, 12] }, "line"],
  ],
});
