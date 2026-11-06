import { icon } from "../icon.js";

export const Calendars = icon("Calendars", "calendars", {
  nodes: [
    ["path", { d: "M12 2v2" }, { r: "lift", d: 0.1, o: [15, 3] }],
    ["path", { d: "M15.726 21.01A2 2 0 0 1 14 22H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2" }, { r: "slide", x: -1, y: 1, a: 1, o: [8.863, 15] }],
    ["path", { d: "M18 2v2" }, { r: "lift", d: 0.16, o: [15, 3] }],
    ["path", { d: "M2 13h2" }, { r: "slide", x: -1, y: 1, a: 1, o: [8.863, 15] }],
    ["path", { d: "M8 8h14" }, { r: "slide", x: 1, y: -1, a: 1, o: [15, 10] }],
    ["rect", { x: "8", y: "3", width: "14", height: "14", rx: "2" }, { r: "slide", x: 1, y: -1, a: 1, o: [15, 10] }],
  ],
});
