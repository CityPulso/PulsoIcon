import { createIcon } from "../runtime/createIcon.js";

export const Radio = createIcon("Radio", "radio", {
  nodes: [
    ["path", { d: "M16.247 7.761a6 6 0 0 1 0 8.478" }, { r: "draw", d: 0.08, o: [12, 12] }],
    ["path", { d: "M19.075 4.933a10 10 0 0 1 0 14.134" }, { r: "draw", d: 0.18, o: [12, 12] }],
    ["path", { d: "M4.925 19.067a10 10 0 0 1 0-14.134" }, { r: "draw", d: 0.2, o: [12, 12] }],
    ["path", { d: "M7.753 16.239a6 6 0 0 1 0-8.478" }, { r: "draw", d: 0.1, o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "2" }, { r: "pop", o: [12, 12] }],
  ],
});
