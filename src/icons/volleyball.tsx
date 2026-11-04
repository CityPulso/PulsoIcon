import { createIcon } from "../runtime/createIcon.js";

export const Volleyball = createIcon("Volleyball", "volleyball", {
  nodes: [
    ["path", { d: "M11 7a16 16 20 0 1 10.98 4.362" }, { r: "spin", a: 180, o: [12, 12] }],
    ["path", { d: "M12 12a13 13 0 0 1-8.66 5" }, { r: "spin", a: 180, o: [12, 12] }],
    ["path", { d: "M16.83 13.634a16 16 0 0 1-9.267 7.328" }, { r: "spin", a: 180, o: [12, 12] }],
    ["path", { d: "M20.66 17A13 13 0 0 0 12 12a13 13 0 0 1 0-10" }, { r: "spin", a: 180, o: [12, 12] }],
    ["path", { d: "M8.17 15.366a16 16 0 0 1-1.713-11.69" }, { r: "spin", a: 180, o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "spin", a: 180, o: [12, 12] }],
  ],
});
