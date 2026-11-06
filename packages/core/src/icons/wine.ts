import { icon } from "../icon.js";

export const Wine = icon("Wine", "wine", {
  nodes: [
    ["path", { d: "M8 22h8" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M7 10h10" }, { r: "sway", a: 8, o: [12, 22] }],
    ["path", { d: "M12 15v7" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z" }, { r: "sway", a: 8, o: [12, 22] }],
  ],
});
