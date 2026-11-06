import { icon } from "../icon.js";

export const RadioOff = icon("RadioOff", "radio-off", {
  nodes: [
    ["path", { d: "M13.414 13.414a2 2 0 1 1-2.828-2.828" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M16.247 7.761a6 6 0 0 1 1.744 4.572" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M19.075 4.933a10 10 0 0 1 2.234 10.72" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.1, o: [12, 12] }],
    ["path", { d: "M4.925 19.067a10 10 0 0 1 0-14.134" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M7.753 16.239a6 6 0 0 1 0-8.478" }, { r: "fade", o: [12, 12] }],
  ],
  solid: [
    ["path", { d: "M16.247 7.761a6 6 0 0 1 0 8.478", fill: "none" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M19.075 4.933a10 10 0 0 1 0 14.134", fill: "none" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M4.925 19.067a10 10 0 0 1 0-14.134", fill: "none" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M7.753 16.239a6 6 0 0 1 0-8.478", fill: "none" }, { r: "fade", o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "2", fill: "none" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.1, o: [12, 12] }, "line"],
  ],
});
