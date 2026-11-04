import { createIcon } from "../runtime/createIcon.js";

export const PersonStanding = createIcon("PersonStanding", "person-standing", {
  nodes: [
    ["circle", { cx: "12", cy: "5", r: "1" }, { r: "float", a: 1.5, o: [12, 5] }],
    ["path", { d: "m9 20 3-6 3 6" }, { r: "press", d: 0.1, a: 0.04, o: [12, 20] }],
    ["path", { d: "m6 8 6 2 6-2" }, { r: "swing", d: 0.05, a: 10, o: [12, 9] }],
    ["path", { d: "M12 10v4" }, { r: "press", d: 0.1, a: 0.04, o: [12, 20] }],
  ],
});
