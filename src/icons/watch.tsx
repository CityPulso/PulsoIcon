import { createIcon } from "../runtime/createIcon.js";

export const Watch = createIcon("Watch", "watch", {
  nodes: [
    ["path", { d: "M12 10v2.2l1.6 1" }, { r: "spin", d: 0.05, a: 360, o: [12, 12] }],
    ["path", { d: "m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05" }, { r: "fade", o: [12.035, 11.985] }],
    ["path", { d: "m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05" }, { r: "fade", o: [12.035, 11.985] }],
    ["circle", { cx: "12", cy: "12", r: "6" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
