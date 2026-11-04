import { createIcon } from "../runtime/createIcon.js";

export const GlobePlus = createIcon("GlobePlus", "globe-plus", {
  nodes: [
    ["path", { d: "M21.92 10.734A10 10 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 0 1 1.266.08" }, { r: "spin", a: 30, o: [12, 12] }],
    ["path", { d: "M15.929 10.563A14.5 14.5 0 0 1 12 22a1 1 0 0 1 0-20 15 15 0 0 1 .68.768" }, { r: "spin", a: 30, o: [12, 12] }],
    ["path", { d: "M22 12H2" }, { r: "spin", a: 30, o: [12, 12] }],
    ["path", { d: "M19 2v6" }, { r: "spin", d: 0.1, a: 90, o: [19, 5] }],
    ["path", { d: "M22 5h-6" }, { r: "spin", d: 0.1, a: 90, o: [19, 5] }],
  ],
});
