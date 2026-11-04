import { createIcon } from "../runtime/createIcon.js";

export const Scale = createIcon("Scale", "scale", {
  nodes: [
    ["path", { d: "M12 3v18" }, { r: "press", a: 0.03, o: [12, 21] }],
    ["path", { d: "m19 8 3 8a5 5 0 0 1-6 0zV7" }, { r: "ring", a: 10, o: [12, 6] }],
    ["path", { d: "M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1" }, { r: "ring", a: 10, o: [12, 6] }],
    ["path", { d: "m5 8 3 8a5 5 0 0 1-6 0zV7" }, { r: "ring", a: 10, o: [12, 6] }],
    ["path", { d: "M7 21h10" }, { r: "press", a: 0.03, o: [12, 21] }],
  ],
});
