import { createIcon } from "../runtime/createIcon.js";

export const Road = createIcon("Road", "road", {
  nodes: [
    ["path", { d: "M12 17v4" }, { r: "slide", d: 0.1, y: 1, a: 3, o: [12, 19] }],
    ["path", { d: "M12 5V3" }, { r: "slide", y: 1, a: 3, o: [12, 4] }],
    ["path", { d: "M12 9v3" }, { r: "slide", d: 0.05, y: 1, a: 3, o: [12, 10.5] }],
    ["path", { d: "M2.077 18.449A2 2 0 0 0 4 21h16a2 2 0 0 0 1.924-2.55l-4-14A2 2 0 0 0 16 3H8a2 2 0 0 0-1.924 1.45z" }, { r: "press", a: 0.03, o: [12, 21] }],
  ],
});
