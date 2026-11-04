import { createIcon } from "../runtime/createIcon.js";

export const Weight = createIcon("Weight", "weight", {
  nodes: [
    ["circle", { cx: "12", cy: "5", r: "3" }, { r: "float", a: 1.5, o: [12, 5] }],
    ["path", { d: "M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z" }, { r: "press", d: 0.05, a: 0.05, o: [12, 21] }],
  ],
});
