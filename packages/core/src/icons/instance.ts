import { icon } from "../icon.js";

export const Instance = icon("Instance", "instance", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M12 6.5 16.5 9v6L12 17.5 7.5 15V9z" }, { r: "float", d: 0.1, a: 1, o: [12, 12] }],
    ["path", { d: "M7.5 9 12 11.5 16.5 9" }, { r: "float", d: 0.1, a: 1, o: [12, 12] }],
    ["path", { d: "M12 11.5v6" }, { r: "float", d: 0.1, a: 1, o: [12, 12] }],
  ],
});
