import { createIcon } from "../runtime/createIcon.js";

export const Extrude = createIcon("Extrude", "extrude", {
  nodes: [
    ["path", { d: "M12 13 3 17.5 12 22l9-4.5Z" }, { r: "press", a: 0.08, o: [12, 17.5] }],
    ["path", { d: "M12 17.5V3" }, { r: "slide", y: -1, a: 1.5, o: [12, 10] }],
    ["path", { d: "m8 7 4-4 4 4" }, { r: "slide", y: -1, a: 1.5, o: [12, 5] }],
  ],
});
