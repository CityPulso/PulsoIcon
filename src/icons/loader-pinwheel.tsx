import { createIcon } from "../runtime/createIcon.js";

export const LoaderPinwheel = createIcon("LoaderPinwheel", "loader-pinwheel", {
  nodes: [
    ["path", { d: "M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0" }, { r: "spin", a: 360, o: [12, 12] }],
    ["path", { d: "M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6" }, { r: "spin", a: 360, o: [12, 12] }],
    ["path", { d: "M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6" }, { r: "spin", a: 360, o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
