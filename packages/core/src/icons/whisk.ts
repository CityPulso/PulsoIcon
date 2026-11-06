import { icon } from "../icon.js";

export const Whisk = icon("Whisk", "whisk", {
  nodes: [
    ["path", { d: "M12 15C8.5 12.5 7 9.5 7 7.5a5 5 0 0 1 10 0c0 2-1.5 5-5 7.5z" }, { r: "flip", o: [12, 9] }],
    ["path", { d: "M12 15c-1.5-2.5-2.5-5-2.5-7.5a2.5 2.5 0 0 1 5 0c0 2.5-1 5-2.5 7.5" }, { r: "flip", d: 0.1, o: [12, 9] }],
    ["path", { d: "M12 15v1" }],
    ["rect", { x: "10.5", y: "16", width: "3", height: "6", rx: "1.5" }],
  ],
});
