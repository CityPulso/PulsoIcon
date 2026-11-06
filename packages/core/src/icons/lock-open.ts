import { icon } from "../icon.js";

export const LockOpen = icon("LockOpen", "lock-open", {
  nodes: [
    ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2" }, { r: "press", d: 0.05, a: 0.04, o: [12, 16.5] }],
    ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1" }, { r: "swing", a: 14, o: [17, 11] }],
  ],
});
