import { createIcon } from "../runtime/createIcon.js";

export const Goblet = createIcon("Goblet", "goblet", {
  nodes: [
    ["path", { d: "M6 3h12l-.5 4.5a5.5 5.5 0 0 1-11 0z" }, { r: "tilt", a: 10, o: [12, 21] }],
    ["path", { d: "M12 13v8" }, { r: "tilt", a: 10, o: [12, 21] }],
    ["path", { d: "M8 21h8" }, { r: "growX", d: 0.1, o: [12, 21] }],
  ],
});
