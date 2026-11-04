import { createIcon } from "../runtime/createIcon.js";

export const Box = createIcon("Box", "box", {
  nodes: [
    ["path", { d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" }, { r: "jelly", a: 0.06, o: [12, 22] }],
    ["path", { d: "m3.3 7 8.7 5 8.7-5" }, { r: "jelly", a: 0.06, o: [12, 22] }],
    ["path", { d: "M12 22V12" }, { r: "grow", d: 0.1, o: [12, 22] }],
  ],
});
